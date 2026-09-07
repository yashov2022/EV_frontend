import { useEffect, useState } from "react";
import StationCard from "../component/StationCard";
import { useNavigate } from "react-router-dom"; 
import api from "../services/api";
import Navbar from "../components/Navbar";

function StationsPage() {
    
    const navigate = useNavigate();

    const [stations, setStations] = useState([]);
    const [error, setError] = useState("");
  
    useEffect(() => {

        
        api.get("/stations")

.then((response)=>{

    setStations(response.data);

})
        .catch(() => {
            setError("Unable to load charging stations. Please try again later.");
        });

    }, []);

    return (
     
    <div className="stations-page">

    <Navbar/>

    <h1>EV Charging Stations</h1>

    {error && <p>{error}</p>}

    <div className="stations-grid">

        {
            stations.map((station)=>(

                <StationCard
                    key={station.id}
                    station={station}
                />

            ))
        }

    </div>

</div>
    );
}

export default StationsPage;