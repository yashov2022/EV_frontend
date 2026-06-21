import { useNavigate } from "react-router-dom";
function StationCard({ station }) {
     const navigate = useNavigate();
    return (
        <div className="station-card">
            <h2>{station.name}</h2>
            <p>{station.address}</p>
            <p>Total Slots: {station.totalSlots}</p>

            <button
            onClick={()=>
                navigate(`/slots/${station.id}`)
            }
            >View Slots</button>
        </div>
    );
}

export default StationCard;