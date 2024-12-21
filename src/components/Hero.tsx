import React from 'react';
import { MapPin, Sun, Wind, LineChart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-green-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mapping India's Renewable Energy Future
            </h1>
            <p className="text-xl mb-8">
              Advanced AI-powered system for identifying optimal locations for solar panels
              and wind turbines across India.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
              hover:bg-green-100 transition duration-300">
              Explore Map
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Sun className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Solar Analysis</h3>
                <p>Advanced CNN models for solar potential prediction</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Wind className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Wind Analysis</h3>
                <p>Comprehensive wind speed and topography assessment</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <MapPin className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location Intel</h3>
                <p>Smart filtering of suitable installation areas</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <LineChart className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Insights</h3>
                <p>Real-time analytics and visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}