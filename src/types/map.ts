export interface MapPoint {
  lat: number;
  lng: number;
  intensity: number;
}

export interface MapConfig {
  center: [number, number];
  zoom: number;
}