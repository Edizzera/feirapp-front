import React, { useState, useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';
// import MapPage from './pages/MapPage';
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import {Icon} from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import Fair from './market (1).png'
import MapPage from './pages/MapPage';
import Header from './pages/Header';
import FairFilters from './pages/FairFilters';



export default function App(){
  const [fairs, setFairs] = useState([]);

  useEffect(() => {
    fetchAllFairs();
  }, []);

  const fetchAllFairs = async () => {
    try {
      const response = await fetch('http://172.26.28.140:8080/api/v1/fairs');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setFairs(data);
    } catch (error) {
      console.error("Falha ao carregar as feiras:", error);
    }
  };

  const handleFilterSubmit = async (filters) => {
    const filteredPayload = buildFilteredPayload(filters);

    try {
      const response = await fetch('http://172.26.28.140:8080/api/v1/fairs/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filteredPayload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFairs(data);
    } catch (error) {
      console.error("Falha ao carregar as feiras filtradas:", error);
    }
  };

   const buildFilteredPayload = (filters) => {
    const payload = {};
    for (const key in filters) {
      if (filters[key]) {
        payload[key] = filters[key];
      }
    }
    console.log(payload)
    return payload;
  };

  return (
    <div>
      <Header />
      <FairFilters onFilterSubmit={handleFilterSubmit} />
      <MapPage fairs={fairs} />
    </div>
  );
}
