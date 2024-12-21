import React, { useState } from 'react';
import { Sun, Wind, Search } from 'lucide-react';

interface MapFiltersProps {
  energyType: 'solar' | 'wind';
  onEnergyTypeChange: (type: 'solar' | 'wind') => void;
  onSearch: (region: string) => void;
}

export default function MapFilters({
  energyType,
  onEnergyTypeChange,
  onSearch
}: MapFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Energy Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onEnergyTypeChange('solar')}
              className={`flex items-center justify-center p-3 rounded-lg ${
                energyType === 'solar'
                  ? 'bg-yellow-100 text-yellow-700 border-yellow-300'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              } border transition-colors`}
            >
              <Sun className="h-5 w-5 mr-2" />
              Solar
            </button>
            <button
              onClick={() => onEnergyTypeChange('wind')}
              className={`flex items-center justify-center p-3 rounded-lg ${
                energyType === 'wind'
                  ? 'bg-blue-100 text-blue-700 border-blue-300'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              } border transition-colors`}
            >
              <Wind className="h-5 w-5 mr-2" />
              Wind
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Search Region or Landmark
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter location..."
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}