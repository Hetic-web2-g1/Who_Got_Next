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
import Pin from "./Marker";
import "./styles.css";

const TOKEN = (mapboxgl.accessToken =
  "pk.eyJ1IjoiZXJ6ZW5rZWwiLCJhIjoiY2t6eHZiempyMDRoZzJucDlmcmxjeTZjcyJ9.aJWheE8snFrd21W1ElV4_g");

const MapRender = ({ userLongitude, userLatitude }) => {
  const [lng, setLng] = useState(userLongitude ? userLongitude : 0);
  const [lat, setLat] = useState(userLatitude ? userLatitude : 0);
  const [radius, setRadius] = useState(0);
  const [zoom, setZoom] = useState(15);
  const [fields, setFields] = useState();
  const [popupInfo, setPopupInfo] = useState(null);
  const southWest = new mapboxgl.LngLat(-5.0, 42.5);
  const northEast = new mapboxgl.LngLat(9.56, 51.15);
  const bounds = [southWest, northEast];

  const mapRef = useRef();

  const pins = fields?.map((field) => (
    <Marker
      key={`marker-${field.id}`}
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

  async function onMoveMapEnd(map) {
    let bounds = mapRef.current.getMap().getBounds()

    let body = {
      north_east: {lat: bounds._ne.lat, lng: bounds._ne.lng},
      south_west: {lat: bounds._sw.lat, lng: bounds._sw.lng}
    }
    
    fetch('http://localhost:8000/fields/location/',
    {
      method: "POST", 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(body)
    }
    )
    .then(response => response.json())
    .then(response => setFields(response)
    .catch(() => {
      console.log("Error fetching data");
    }))
  }
  return (
    <>
      <Map
      ref={mapRef}
        initialViewState={{
          latitude: lat,
          longitude: lng,
          zoom: zoom,
          maxBounds: bounds,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={TOKEN}
        onMoveEnd={onMoveMapEnd}
      >
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
          >
            <div>
              {popupInfo.name} <br/>
              {popupInfo.description} <br/>
              <br/>
              Acces Handicapé : {popupInfo.handicap ?  "oui" : "non"}<br/>
              Toilettes : {popupInfo.bathroom ? "oui" : "non"}<br/>
              Douches : {popupInfo.shower ? "oui" : "non"}<br/>
              Vestiaires : {popupInfo.dressing_room ? "oui" : "non"}<br/>
              Chauffage : {popupInfo.heating ? "oui" : "non"}<br/>
              Parking : {popupInfo.parking ? "oui" : "non"}<br/>
              Transport en commun : {popupInfo.public_transport ? "oui" : "non"}<br/>
              <a
                target="_new"
                href={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}
              >
                Infos
              </a>
            </div>
            <img
              width="100%"
              src={
                popupInfo?.image_path
                  ? popupInfo?.image_path
                  : "../../../assets/kirbok.jpg"
              }
            />
          </Popup>
        )}
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
