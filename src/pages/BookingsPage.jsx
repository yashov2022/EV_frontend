import { useState, useEffect } from "react";
import axios from "axios";
import api from "../services/api";
function BookingsPage() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
      api.get("/book/history")
        .then((response) => {
          setBookings(response.data);
        });
    }, []);

    return (

        <div>

            <h1>Booking History</h1>

        {
            bookings.map((booking) => (

                <div
                    key={booking.id}
                    className="booking-card"
                >

                    <h3>
                        Booking #{booking.id}
                    </h3>

                    <p>
                        User:
                        {" "}
                        {booking.userName}
                    </p>

                    <p>
                        Vehicle:
                        {" "}
                        {booking.vehicleNumber}
                    </p>

                </div>

            ))
        }

        </div>

    );
}

export default BookingsPage;