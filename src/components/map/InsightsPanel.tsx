import React from 'react';
import { Info, MapPin } from 'lucide-react';

interface InsightsPanelProps {
  energyType: 'solar' | 'wind';
  selectedRegion: string | null;
}

export default function InsightsPanel({ energyType, selectedRegion }: InsightsPanelProps) {
  let locations = [];
  try {
    locations = selectedRegion ? JSON.parse(selectedRegion) : [];
  } catch (e) {
    locations = [];
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Info className="h-5 w-5 mr-2" />
        Top Suitable Locations
      </h3>
      
      {locations.length > 0 ? (
        <div className="space-y-4">
          {locations.map((location: any, index: number) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {location.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Suitability Score: <span className="font-semibold">{location.score}/10</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-8">
          Search for a region to view suitable locations for {energyType} energy installation
        </div>
      )}
    </div>
  );
}