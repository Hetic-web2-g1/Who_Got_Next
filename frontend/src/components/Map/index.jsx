import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import PopupContent from "./PopupContent";
import SearchBarDropdown from "./SearchBarDropdown";
import Pin from "./Marker";

const TOKEN = (mapboxgl.accessToken =
  "pk.eyJ1IjoiZXJ6ZW5rZWwiLCJhIjoiY2t6eHZiempyMDRoZzJucDlmcmxjeTZjcyJ9.aJWheE8snFrd21W1ElV4_g");

const MapRender = ({ userLongitude, userLatitude }) => {
  const [lng, setLng] = useState(userLongitude ? userLongitude : 0);
  const [lat, setLat] = useState(userLatitude ? userLatitude : 0);
  const [zoom, setZoom] = useState(15);
  const [fields, setFields] = useState();
  const [searchOptions, setSearchOptions] = useState();
  const [popupInfo, setPopupInfo] = useState(null);
  const southWest = new mapboxgl.LngLat(-5.0, 42.5);
  const northEast = new mapboxgl.LngLat(9.56, 51.15);
  const bounds = [southWest, northEast];

  const mapRef = useRef();

  const pins = fields?.map((field) => (
    <Marker
      key={`marker-${field.facility_name}-${field.facility_id}`}
      longitude={field.longitude}
      latitude={field.latitude}
      anchor="bottom"
      onClick={(e) => {
        e.originalEvent.stopPropagation();
        setPopupInfo(field);
      }}
    >
      <Pin />
    </Marker>
  ));

  async function onMoveMapEnd(zoom) {
    let bounds = mapRef.current.getMap().getBounds();

    let body = {
      north_east: { lat: bounds._ne.lat, lng: bounds._ne.lng },
      south_west: { lat: bounds._sw.lat, lng: bounds._sw.lng },
    };

    if (zoom >= 12) {
      fetch("http://localhost:8000/fields/location/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((response) => setFields(response));
    } else {
      setFields(null);
    }
  }

  const onInputChange = (event) => {
    const newOptions = fields?.filter((option) =>
      option.facility_name
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setSearchOptions(newOptions);
  };

  return (
    <>
      <div className="heroImg">
        <Map
          ref={mapRef}
          initialViewState={{
            latitude: lat,
            longitude: lng,
            zoom: zoom,
            maxBounds: bounds,
          }}
          style={{ width: "100%", height: "90vh" }}
          mapStyle="mapbox://styles/mapbox/light-v10"
          mapboxAccessToken={TOKEN}
          onMoveEnd={(e) => onMoveMapEnd(e.viewState.zoom)}
        >
          <div className="searchHero">
            <SearchBarDropdown
              options={searchOptions}
              onInputChange={onInputChange}
              mapRef={mapRef}
            />
          </div>
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />

          {pins}

          {popupInfo && (
            <Popup
              anchor="top"
              longitude={popupInfo.longitude}
              latitude={popupInfo.latitude}
              onClose={() => setPopupInfo(null)}
              maxWidth={"500px"}
            >
              <PopupContent content={popupInfo} />
            </Popup>
          )}
        </Map>
      </div>
    </>
  );
};

Map.propTypes = {
  userLongitude: PropTypes.number,
  userLatitude: PropTypes.number,
  fields: PropTypes.object,
};

export default MapRender;
