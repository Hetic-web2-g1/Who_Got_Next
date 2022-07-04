import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Map, {
    Marker,
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
  } from 'react-map-gl';
import Pin from './Marker'

import './styles.css';
 
const TOKEN = mapboxgl.accessToken = 'pk.eyJ1IjoiZXJ6ZW5rZWwiLCJhIjoiY2t6eHZiempyMDRoZzJucDlmcmxjeTZjcyJ9.aJWheE8snFrd21W1ElV4_g';

const MapRender = ({userLongitude, userLatitude, fields}) => {
    const [lng, setLng] = useState(userLongitude ? userLongitude : 0);
    const [lat, setLat] = useState(userLatitude ? userLatitude : 0);
    const [popupInfo, setPopupInfo] = useState(null);

    const pins = useMemo(() =>
      fields.data.map((field) => (
        <Marker
          key={`marker-${field.id}`}
          longitude={field.location[1]}
          latitude={field.location[0]}
          anchor="bottom"
          onClick={e => {
            e.originalEvent.stopPropagation();
            setPopupInfo(field);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
    );  

    return (
        <>
          <Map
            initialViewState={{
              latitude: lat,
              longitude: lng,
              zoom: 15,
            }}
            style={{width: '100vw', height: '100vh'}}
            mapStyle="mapbox://styles/mapbox/light-v10"
            mapboxAccessToken={TOKEN}
          >
            <GeolocateControl position="top-left" />
            <FullscreenControl position="top-left" />
            <NavigationControl position="top-left" />
            <ScaleControl />
    
            {pins}
    
            {popupInfo && (
              <Popup
                anchor="top"
                longitude={popupInfo.location[1]}
                latitude={popupInfo.location[0]}
                onClose={() => setPopupInfo(null)}
              >
                <div>
                  {popupInfo.description} | {' '}
                    <a
                        target="_new"
                        href={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}
                        >
                        Infos
                    </a>
                </div>
                <img width="100%" src={popupInfo?.image_path} />
              </Popup>
            )}
          </Map>
        </>
      );
}

Map.propTypes = {
    userLongitude: PropTypes.number,
    userLatitude: PropTypes.number,
    fields: PropTypes.object,
}

export default MapRender