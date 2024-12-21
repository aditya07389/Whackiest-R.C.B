import React, { useState } from 'react';
import MapView from './MapView';
import MapFilters from './MapFilters';
import InsightsPanel from './InsightsPanel';

export default function MapInterface() {
  const [energyType, setEnergyType] = useState<'solar' | 'wind'>('solar');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleSearch = (region: string) => {
    // In a real application, this would make an API call to get suitable locations
    // For now, we'll simulate finding suitable locations
    const suitableLocations = [
      {
        name: `${region} - Area 1`,
        score: 9.5,
        coordinates: [20.5937, 78.9629]
      },
      {
        name: `${region} - Area 2`,
        score: 9.2,
        coordinates: [21.5937, 79.9629]
      },
      {
        name: `${region} - Area 3`,
        score: 8.8,
        coordinates: [19.5937, 77.9629]
      },
      {
        name: `${region} - Area 4`,
        score: 8.5,
        coordinates: [22.5937, 80.9629]
      },
      {
        name: `${region} - Area 5`,
        score: 8.2,
        coordinates: [18.5937, 76.9629]
      }
    ];

    // Update the map and insights with the suitable locations
    setSelectedRegion(JSON.stringify(suitableLocations));
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <MapFilters
            energyType={energyType}
            onEnergyTypeChange={setEnergyType}
            onSearch={handleSearch}
          />
        </div>
        <div className="lg:col-span-2">
          <MapView
            energyType={energyType}
            selectedRegion={selectedRegion}
            onRegionSelect={setSelectedRegion}
          />
        </div>
        <div className="lg:col-span-1">
          <InsightsPanel
            energyType={energyType}
            selectedRegion={selectedRegion}
          />
        </div>
      </div>
    </div>
  );
}