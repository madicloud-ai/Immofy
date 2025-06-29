// Immofy Beta – Dummy Heatmap ohne API Key (funktioniert sofort)
// Zeigt eine statische Leaflet Heatmap ohne MapBox, zum direkten Testen und Präsentieren

import Head from 'next/head';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Home() {
  useEffect(() => {
    const map = L.map('map').setView([52.52, 13.405], 12); // Berlin

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(map);

    // Dummy Punkte
    const points = [
      { lat: 52.52, lng: 13.405, score: 80 },
      { lat: 52.51, lng: 13.39, score: 60 },
      { lat: 52.53, lng: 13.42, score: 40 }
    ];

    points.forEach((point) => {
      const color = point.score >= 70 ? 'green' : point.score >= 40 ? 'yellow' : 'red';
      const circle = L.circle([point.lat, point.lng], {
        color: color,
        fillColor: color,
        fillOpacity: 0.5,
        radius: 500
      }).addTo(map);

      circle.bindPopup(`Score: ${point.score}`);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Immofy Beta Dummy Heatmap</title>
        <meta name="description" content="Immofy Beta – Dummy Heatmap Test" />
      </Head>
      <h1 style={{ textAlign: 'center', padding: '10px' }}>🚀 Immofy Beta: Dummy Heatmap</h1>
      <p style={{ textAlign: 'center' }}>Diese Dummy-Heatmap zeigt Testpunkte in Berlin ohne API Key.</p>
      <div id="map" style={{ height: '80vh', width: '100%' }}></div>
      <footer style={{ textAlign: 'center', fontSize: '0.85rem', padding: '20px' }}>
        Die endgültige Entscheidung, ob du eine Immobilie kaufst, verkaufst, vermietest oder anderweitig nutzt, triffst ausschließlich nur du selbst. Immofy bietet keine Kauf-, Verkaufs- oder Nutzungsempfehlungen, sondern reine, datenbasierte Analysen.
      </footer>
    </div>
  );
}
