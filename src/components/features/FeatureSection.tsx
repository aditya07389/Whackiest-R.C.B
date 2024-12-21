import React from 'react';
import { Database, Brain, Map, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

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

export default function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}