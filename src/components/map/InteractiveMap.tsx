import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import HeatmapLayer from './HeatmapLayer';
import MapControls from './MapControls';
import { solarHeatmapPoints, windHeatmapPoints } from '../../data/sampleData';
import { MapConfig } from '../../types/map';

const defaultConfig: MapConfig = {
  center: [20.5937, 78.9629], // Center of India
  zoom: 5
};

export default function InteractiveMap() {
  const [activeLayer, setActiveLayer] = useState<'solar' | 'wind'>('solar');

  return (
    <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapControls
        activeLayer={activeLayer}
        onLayerChange={setActiveLayer}
      />
      <MapContainer
        center={defaultConfig.center}
        zoom={defaultConfig.zoom}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HeatmapLayer
          points={activeLayer === 'solar' ? solarHeatmapPoints : windHeatmapPoints}
        />
      </MapContainer>
    </div>
  );
}