import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import PreviewMap from '../components/home/PreviewMap';
import ImpactSection from '../components/sections/ImpactSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PreviewMap />
        <ImpactSection />
        <ContactSection />
      </main>
    </div>
  );
}