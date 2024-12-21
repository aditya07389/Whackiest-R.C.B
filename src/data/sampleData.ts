import { MapPoint } from '../types/map';

// Sample data points across India for demonstration
export const solarHeatmapPoints: MapPoint[] = [
  { lat: 23.2599, lng: 77.4126, intensity: 0.9 }, // Bhopal
  { lat: 26.9124, lng: 75.7873, intensity: 1.0 }, // Jaipur
  { lat: 21.1458, lng: 79.0882, intensity: 0.8 }, // Nagpur
  { lat: 17.3850, lng: 78.4867, intensity: 0.9 }, // Hyderabad
  { lat: 15.3173, lng: 75.7139, intensity: 0.7 }, // Karnataka
  // Add more points as needed
];

export const windHeatmapPoints: MapPoint[] = [
  { lat: 8.7642, lng: 77.6569, intensity: 0.9 },  // Tamil Nadu
  { lat: 22.2587, lng: 71.1924, intensity: 0.8 }, // Gujarat
  { lat: 19.7515, lng: 75.7139, intensity: 0.7 }, // Maharashtra
  { lat: 15.9129, lng: 79.7400, intensity: 0.6 }, // Andhra Pradesh
  { lat: 13.0827, lng: 80.2707, intensity: 0.8 }, // Chennai
  // Add more points as needed
];