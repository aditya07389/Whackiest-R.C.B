import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';
import { MapPoint } from '../../types/map';

interface HeatmapLayerProps {
  points: MapPoint[];
}

export default function HeatmapLayer({ points }: HeatmapLayerProps) {
  const map = useMap();

  useEffect(() => {
    const heatData = points.map(point => [
      point.lat,
      point.lng,
      point.intensity
    ]);

    const heatLayer = (L as any).heatLayer(heatData, {
      radius: 25,
      blur: 15,
      maxZoom: 10,
      gradient: {
        0.4: '#ffffd9',
        0.6: '#41b6c4',
        0.8: '#225ea8',
        1.0: '#081d58'
      }
    });

    heatLayer.addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, points]);

  return null;
}