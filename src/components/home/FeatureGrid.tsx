import React from 'react';
import { Sun, Wind, MapPin, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Sun className="h-10 w-10" />,
    title: "Solar Analysis",
    description: "Advanced CNN models for solar potential prediction"
  },
  {
    icon: <Wind className="h-10 w-10" />,
    title: "Wind Analysis",
    description: "Comprehensive wind speed and topography assessment"
  },
  {
    icon: <MapPin className="h-10 w-10" />,
    title: "Location Intel",
    description: "Smart filtering of suitable installation areas"
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Data Insights",
    description: "Real-time analytics and visualization"
  }
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}