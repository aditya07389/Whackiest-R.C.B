import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Wind, ArrowLeft } from 'lucide-react';

export default function MapHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Sun className="h-6 w-6 text-yellow-500" />
            <Wind className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-xl">Energy Suitability Map</span>
          </div>
        </div>
      </div>
    </header>
  );
}