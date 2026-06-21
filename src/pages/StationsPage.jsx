import { useEffect, useState } from "react";
import axios from "axios";
import StationCard from "../component/StationCard";
import { useNavigate } from "react-router-dom"; 
import api from "../services/api";
import Navbar from "../components/Navbar";

function StationsPage() {
    
    const navigate = useNavigate();

    const [stations, setStations] = useState([]);
  
    useEffect(() => {

        
        api.get("/stations")

.then((response)=>{

    setStations(response.data);

});

    }, []);

    return (
     
    <div className="stations-page">

    <Navbar/>

    <h1>EV Charging Stations</h1>

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