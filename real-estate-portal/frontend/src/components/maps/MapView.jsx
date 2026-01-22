import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function MapView({ lat, lng }) {
  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: "300px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]} />
    </MapContainer>
  );
}
