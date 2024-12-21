import React from 'react';
import { Database, Brain, Map, Shield } from 'lucide-react';

const features = [
  {
    icon: <Database className="h-8 w-8" />,
    title: "Data Collection",
    description: "Comprehensive satellite imagery and environmental data integration"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "ML Analysis",
    description: "Advanced CNN models for precise energy potential prediction"
  },
  {
    icon: <Map className="h-8 w-8" />,
    title: "Geospatial Mapping",
    description: "Interactive visualization of energy potential across India"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Smart Filtering",
    description: "Intelligent exclusion of protected areas and urban zones"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Our Technology</h2>
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