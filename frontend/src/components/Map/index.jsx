import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  Layer,
} from "react-map-gl";
import PopupContent from "./PopupContent"
import Pin from "./Marker";

import "./styles.css";
import { useEffect } from "react";

const TOKEN = (mapboxgl.accessToken =
  "pk.eyJ1IjoiZXJ6ZW5rZWwiLCJhIjoiY2t6eHZiempyMDRoZzJucDlmcmxjeTZjcyJ9.aJWheE8snFrd21W1ElV4_g");

const MapRender = ({ userLongitude, userLatitude, fields }) => {
  const [lng, setLng] = useState(userLongitude ? userLongitude : 0);
  const [lat, setLat] = useState(userLatitude ? userLatitude : 0);
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

    if (zoom >= 10) {
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

  return (
    <>
      <Map
        initialViewState={{
          latitude: lat,
          longitude: lng,
          zoom: 15,
          maxBounds: bounds,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={TOKEN}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {/* <Layer type={"symbol"} source={"map"}> */}
        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.location[1]}
            latitude={popupInfo.location[0]}
            onClose={() => setPopupInfo(null)}
            maxWidth={"500px"}
          >
            <PopupContent content={popupInfo}/>
          </Popup>
        )}
        {/* </Layer> */}
      </Map>
    </>
  );
};

Map.propTypes = {
  userLongitude: PropTypes.number,
  userLatitude: PropTypes.number,
  fields: PropTypes.object,
};

export default MapRender;
