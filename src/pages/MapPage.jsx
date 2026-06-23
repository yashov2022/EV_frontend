import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

function MapPage() {

    const [stations, setStations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get("/stations")
            .then((response) => {
                setStations(response.data);
            });
    }, []);

    return (
        <MapContainer
            center={[12.9716, 77.5946]}
            zoom={12}
            style={{ height: "600px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {stations.map((station) => (
                <Marker
                    key={station.id}
                    position={[station.latitude, station.longitude]}
                >
                    <Popup>
                        <h3>{station.name}</h3>
                        <p>{station.address}</p>

                        <button
                            onClick={() => navigate(`/slots/${station.id}`)}
                        >
                            View Slots
                        </button>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapPage;