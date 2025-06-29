import Head from 'next/head';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Home() {
  useEffect(() => {
    const map = L.map('map').setView([52.52, 13.405], 12); // Berlin Standard

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(map);

    // Dummy-Daten für Heatmap-Punkte
    const heatData = [
      { lat: 52.5200, lng: 13.4050, score: 80 },
      { lat: 52.5150, lng: 13.4100, score: 60 },
      { lat: 52.5250, lng: 13.4000, score: 40 },
    ];

    heatData.forEach((point) => {
      const color = point.score >= 70 ? 'green' : point.score >= 40 ? 'yellow' : 'red';
      const circle = L.circle([point.lat, point.lng], {
        color: color,
        fillColor: color,
        fillOpacity: 0.4,
        radius: 300,
      }).addTo(map);

      circle.bindPopup(`Score: ${point.score}`);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Immofy Beta Heatmap</title>
        <meta name="description" content="Immofy Beta Heatmap und Filtersystem" />
      </Head>

      <h1 style={{ textAlign: 'center', padding: '10px' }}>🚀 Immofy Beta: Heatmap Live</h1>
      <p style={{ textAlign: 'center' }}>Zoome in die Karte, um Lagebewertungen in Berlin zu sehen.</p>

      {/* Map Container */}
      <div id="map" style={{ height: '500px', width: '100%', marginBottom: '20px' }}></div>

      {/* Footer Disclaimer */}
      <footer style={{ textAlign: 'center', fontSize: '0.85rem', padding: '20px' }}>
        Die endgültige Entscheidung, ob du eine Immobilie kaufst, verkaufst, vermietest oder anderweitig nutzt, triffst ausschließlich nur du selbst. Immofy bietet keine Kauf-, Verkaufs- oder Nutzungsempfehlungen, sondern reine, datenbasierte Analysen.
      </footer>
    </div>
  );
}
