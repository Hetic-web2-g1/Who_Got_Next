import React, { useState } from 'react';
import MapRender from '../../components/Map'
import Spinner from '../../components/Spinner'
import { useFetch } from '../../services/mapFetch'

const MapPage = () => {
  //const fields = useFetch('http://localhost:8000/fields');
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
      <MapRender userLongitude={lng} userLatitude={lat}></MapRender>
    );
  } 
  else 
    return(<Spinner/>);
}

export default MapPage;