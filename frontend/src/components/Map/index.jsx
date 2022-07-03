import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import './styles.css';
import Marker from './Marker'
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZXJ6ZW5rZWwiLCJhIjoiY2t6eHZiempyMDRoZzJucDlmcmxjeTZjcyJ9.aJWheE8snFrd21W1ElV4_g';

const Map = ({userLongitude, userLatitude, fields}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(userLongitude ? userLongitude : 0);
    const [lat, setLat] = useState(userLatitude ? userLatitude : 0);
    const [zoom, setZoom] = useState(17);

    const createMarker = (map, lat, lng, popup) => {
        const loc = [lng, lat]
        const el = document.createElement('div');
        el.className = 'marker';
        if(popup){
            new mapboxgl.Marker(el)
            .setLngLat(loc)
            .addTo(map.current)
            .setPopup(
                new mapboxgl.Popup({ offset: 25 })
                .setHTML(
                    `<h3>zoubi</h3>
                    <p>les enfants</p>`
                )
            );
        }
        else {            
            new mapboxgl.Marker(el)
            .setLngLat(loc)
            .addTo(map.current)
        }
    }

    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom
        });
        fields.data.map(field => {    
            createMarker(map, field.location[0], field.location[1])
        });
    });

    useEffect(() => {
        if (!map.current) return; 
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });    

    useEffect(() => {
        if (!map.current) return;
        map.current.on('click', function(e) {
            createMarker(map, e.lngLat["lat"], e.lngLat["lng"], true)
        });
    });

    return (
        <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

Map.propTypes = {
    userLongitude: PropTypes.number,
    userLatitude: PropTypes.number,
    fields: PropTypes.object,
}

export default Map