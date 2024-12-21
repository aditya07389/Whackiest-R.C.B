import React from 'react';
import { TreePine, Factory, Users } from 'lucide-react';

const impacts = [
  {
    icon: <TreePine className="h-12 w-12" />,
    title: "Environmental Impact",
    description: "Potential reduction of 100M+ tons of CO2 emissions annually through optimal renewable energy placement",
    stat: "100M+"
  },
  {
    icon: <Factory className="h-12 w-12" />,
    title: "Economic Growth",
    description: "Creating opportunities for sustainable energy development and local job creation",
    stat: "50K+"
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Community Benefits",
    description: "Empowering communities with clean, reliable energy sources",
    stat: "1000+"
  }
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
              <div className="text-green-600 mb-4 flex justify-center">{impact.icon}</div>
              <div className="text-4xl font-bold text-green-600 mb-2">{impact.stat}</div>
              <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
              <p className="text-gray-600">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}