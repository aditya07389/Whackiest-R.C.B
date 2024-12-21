import React from 'react';
import InteractiveMap from '../map/InteractiveMap';

export default function PreviewMap() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Renewable Energy Potential
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Toggle between solar and wind energy potential maps to discover optimal locations
          for renewable energy installations across India.
        </p>
        <InteractiveMap />
      </div>
    </section>
  );
}