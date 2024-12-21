import React from 'react';
import { Sun, Wind, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Sun className="h-6 w-6" />
          <Wind className="h-6 w-6" />
          <span className="font-bold text-xl">EnergyMap India</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-green-200 transition">Features</a>
          <a href="#about" className="hover:text-green-200 transition">About</a>
          <a href="#contact" className="hover:text-green-200 transition">Contact</a>
        </div>
      </nav>
    </header>
  );
}