import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon } from 'leaflet';
import Fair from '../market (1).png'
import FairCard from './FairCard';

import './MapPage.css'


const MapPage = ({ fairs }) => { 
    const customIcon = new Icon({
      iconUrl: Fair,
      iconSize: [38, 38]
    });
  
    return (
        <div className="map-container">
          <MapContainer center={[-30.0368, -51.2090]} zoom={13} className="leaflet-container">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MarkerClusterGroup>
              {fairs.map((fair, index) => (
                <Marker
                  key={index}
                  position={[fair.latitude, fair.longitude]}
                  icon={customIcon}
                >
                  <Popup>
                    <FairCard fair={fair} />
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </MapContainer>
        </div>
      );
    };
  
  export default MapPage;