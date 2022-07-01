import React, { useState } from 'react';
import Map from '../../components/Map'

export const MapPage = () => {
  const [gotPosition, setGotPosition] = useState(false);
  const [lng, setLng] = useState(10);
  const [lat, setLat] = useState(10);
  const options = {
    enableHighAccuracy: true,
    maximumAge: 0
  };
  function success(position) {
    setLng(position.coords.longitude);
    setLat(position.coords.latitude);
    setGotPosition(true);
  }
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  } 
  navigator.geolocation.getCurrentPosition(success, error, options)

  if(gotPosition) {
    return (
      <Map userLongitude={lng} userLatitude={lat}></Map>
    );
  } 
  else 
    return(null);
}

export default MapPage;