import React from 'react';
import { Sun, Wind } from 'lucide-react';

interface MapControlsProps {
  activeLayer: 'solar' | 'wind';
  onLayerChange: (layer: 'solar' | 'wind') => void;
}

export default function MapControls({ activeLayer, onLayerChange }: MapControlsProps) {
  return (
    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2 z-[1000]">
      <div className="flex space-x-2">
        <button
          onClick={() => onLayerChange('solar')}
          className={`p-2 rounded-lg flex items-center ${
            activeLayer === 'solar' ? 'bg-green-100 text-green-600' : 'text-gray-600'
          }`}
        >
          <Sun className="h-5 w-5" />
          <span className="ml-2">Solar</span>
        </button>
        <button
          onClick={() => onLayerChange('wind')}
          className={`p-2 rounded-lg flex items-center ${
            activeLayer === 'wind' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
          }`}
        >
          <Wind className="h-5 w-5" />
          <span className="ml-2">Wind</span>
        </button>
      </div>
    </div>
  );
}