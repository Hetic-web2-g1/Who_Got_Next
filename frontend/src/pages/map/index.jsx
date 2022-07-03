import React, { useState } from 'react';
import Map from '../../components/Map'
import { useFetch } from '../../services/mapFetch'

const MapPage = () => {
  const fields = useFetch('http://localhost:8000/fields');
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
      <Map userLongitude={lng} userLatitude={lat} fields={fields}></Map>
    );
  } 
  else 
    return(null);
}

export default MapPage;