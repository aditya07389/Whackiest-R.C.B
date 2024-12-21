import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPoint } from '../../types/map';
import HeatmapLayer from './HeatmapLayer';
import { solarHeatmapPoints, windHeatmapPoints } from '../../data/sampleData';

interface MapViewProps {
  energyType: 'solar' | 'wind';
  suitabilityLevel: string;
  onRegionSelect: (region: string) => void;
}

// Fix Leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function MapEventHandler({ onRegionSelect }: { onRegionSelect: (region: string) => void }) {
  const map = useMap();

  useEffect(() => {
    const handleClick = (e: L.LeafletMouseEvent) => {
      // Simulate region selection with coordinates
      const lat = e.latlng.lat.toFixed(2);
      const lng = e.latlng.lng.toFixed(2);
      onRegionSelect(`Region at ${lat}, ${lng}`);
    };

    map.on('click', handleClick);

    return () => {
      map.off('click', handleClick);
    };
  }, [map, onRegionSelect]);

  return null;
}

export default function MapView({ energyType, suitabilityLevel, onRegionSelect }: MapViewProps) {
  const points: MapPoint[] = energyType === 'solar' ? solarHeatmapPoints : windHeatmapPoints;
  
  // Filter points based on suitability level
  const filteredPoints = suitabilityLevel === 'all' 
    ? points 
    : points.filter(point => {
        if (suitabilityLevel === 'high') return point.intensity >= 0.7;
        if (suitabilityLevel === 'medium') return point.intensity >= 0.4 && point.intensity < 0.7;
        return point.intensity < 0.4;
      });

  return (
    <div className="bg-white rounded-lg shadow-md p-2 h-[600px]">
      <MapContainer
        center={[20.5937, 78.9629]} // Center of India
        zoom={5}
        className="h-full w-full rounded-lg"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <HeatmapLayer points={filteredPoints} />
        <MapEventHandler onRegionSelect={onRegionSelect} />
      </MapContainer>
    </div>
  );
}