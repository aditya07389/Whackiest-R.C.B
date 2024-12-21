import React from 'react';
import { Sun, Wind } from 'lucide-react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Sun className="h-6 w-6" />
          <Wind className="h-6 w-6" />
          <span className="font-bold text-xl">EnergyMap India</span>
        </div>
        <Navigation />
      </div>
    </header>
  );
}