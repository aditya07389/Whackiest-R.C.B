import React from 'react';
import { Database, Brain, Map, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Comprehensive Data Collection",
      description: "Integration of satellite imagery, environmental data, and geographical information for thorough analysis."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Advanced ML Models",
      description: "State-of-the-art machine learning models for precise prediction of energy generation potential."
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Interactive Visualization",
      description: "Dynamic heatmaps and geospatial visualizations for intuitive data exploration."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Smart Filtering",
      description: "Automatic exclusion of protected areas and intelligent land-use analysis."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}