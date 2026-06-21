import { useEffect, useState } from "react";
import api from "../services/api";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from "react-leaflet";

function MapPage() {

    const [stations, setStations] = useState([]);

   useEffect(() => {

    api
        .get("/stations")
        .then((response) => {

            setStations(response.data);

        });

}, []);

    return (

        <MapContainer
            center={[12.9716, 77.5946]}
            zoom={12}
            style={{
                height: "600px",
                width: "100%"
            }}
        >

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

           

            {
                stations.map((station) => (

                    <Marker
                        key={station.id}
                        position={[
                            station.latitude,
                            station.longitude
                        ]}
                    >

                        <Popup>

               <h3>{station.name}</h3>

              <p>{station.address}</p>

             <button
                 onClick={() =>
            navigate(`/slots/${station.id}`)
                  }
              >
        View Slots
    </button>

</Popup>

                    </Marker>

                ))
            }

        </MapContainer>

    );
}

export default MapPage;