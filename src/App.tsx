import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EnergyMapPage from './pages/EnergyMapPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<EnergyMapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;