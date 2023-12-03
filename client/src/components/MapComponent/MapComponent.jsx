import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
    const center = [51.505, -0.09];
    return (
        <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
                <Popup>
                    Our Office Location. <br /> Welcome to visit us!
                </Popup>
            </Marker>
        </MapContainer>
    );
}