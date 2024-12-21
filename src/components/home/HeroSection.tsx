import React from 'react';
import { ArrowRight } from 'lucide-react';
import FeatureGrid from './FeatureGrid';

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-green-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Optimizing India's Renewable Energy Future
            </h1>
            <p className="text-xl mb-8">
              Discover optimal locations for renewable energy installations using our
              AI-powered mapping system.
            </p>
            <a 
              href="/map"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 
                rounded-lg font-semibold hover:bg-green-100 transition duration-300"
            >
              Explore Map
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="md:w-1/2">
            <FeatureGrid />
          </div>
        </div>
      </div>
    </div>
  );
}