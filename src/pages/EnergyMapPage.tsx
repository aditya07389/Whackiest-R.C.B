import React from 'react';
import MapHeader from '../components/map/MapHeader';
import MapInterface from '../components/map/MapInterface';

export default function EnergyMapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MapHeader />
      <MapInterface />
    </div>
  );
}