import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import './styles.css';
import Marker from './Marker'
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZXJ6ZW5rZWwiLCJhIjoiY2t6eHZiempyMDRoZzJucDlmcmxjeTZjcyJ9.aJWheE8snFrd21W1ElV4_g';

const Map = ({userLongitude, userLatitude}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(userLongitude ? userLongitude : 0);
    const [lat, setLat] = useState(userLatitude ? userLatitude : 0);
    const [zoom, setZoom] = useState(17);

    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
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
            const lng = e.lngLat["lng"];
            const lat = e.lngLat["lat"];
            const coordinates = [lng, lat]
            const el = document.createElement('div');
            el.className = 'marker';
            new mapboxgl.Marker(el)
            .setLngLat(coordinates)
            .setPopup(
                new mapboxgl.Popup({ offset: 25 })
                .setHTML(
                    `<h3>zoubi</h3>
                    <p>les enfants</p>`
                )
            )
            .addTo(map.current);
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
}

export default Map