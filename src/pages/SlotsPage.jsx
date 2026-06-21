import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
function SlotsPage() {
    const { stationId } = useParams();
    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [userName, setUserName] = useState("");
    const [vehicleNumber, setVehicleNumber] = useState("");
    
     useEffect(() => {

        fetchSlots();

    }, [stationId]);
    const fetchSlots = () => {
        api.get(`/slots/${stationId}`)
            .then((response) => {
                setSlots(response.data);
            });
    };
    const bookSlot = () => {
        if (!selectedSlot || !userName || !vehicleNumber) {
            alert("Please select a slot and fill in all booking fields.");
            return;
        }

        const bookingData = {
            stationId,
            slotId: selectedSlot,
            userName,
            vehicleNumber,
        };

        api.post(
            "/book",
            bookingData
        )
            .then((response) => {
                alert("Booking Successful");

                // Fetch slots again
                fetchSlots();
            })
            .catch((error) => {
                alert("Booking Failed");
            });
    };

    return (

        <div>

            <h1>Available Slots</h1>

            {
    slots.map((slot) => (

        <div key={slot.id}>

            <h3>
                {slot.startTime}
                {" - "}
                {slot.endTime}
            </h3>

            <p>
                {
                     slot.available ? (

        <button
            onClick={() =>
                setSelectedSlot(slot.id)
            }
        >
            Book Slot
        </button>

    ) : (

        <button disabled>
            Already Booked
        </button>

    )
                }
            </p>

           

        </div>

    ))
}
{
            selectedSlot && (

                <div className="slot-card" >

                    <h2>Book Slot</h2>

                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={userName}
                        onChange={(e) =>
                            setUserName(e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Vehicle Number"
                        value={vehicleNumber}
                        onChange={(e) =>
                            setVehicleNumber(e.target.value)
                        }
                    />

                    <button onClick={bookSlot}>
                        Confirm Booking
                    </button>

                </div>

            )
        }

        </div>

    );
}

export default SlotsPage;