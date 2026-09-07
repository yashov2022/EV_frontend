import { useEffect, useState } from "react";
import api from "../services/api";
function DashboardPage() {

    const [data, setData] =
        useState(null);
    const [error, setError] =
        useState("");

    useEffect(() => {

       api.get("/dashboard")
        .then((response) => {
            setData(response.data);
        })
        .catch(() => {
            setError("Unable to load dashboard data. Please try again later.");
        });

    }, []);

    if (error) {
        return <h1>{error}</h1>;
    }

    if (!data) {

        return <h1>Loading...</h1>;

    }

    return (

        <div>

            <h1>
                Dashboard
            </h1>

            <div className="dashboard-grid">

                <div className="dashboard-card">
                    <h2>
                        {data.totalStations}
                    </h2>

                    <p>Stations</p>
                </div>

                <div className="dashboard-card">
                    <h2>
                        {data.totalSlots}
                    </h2>

                    <p>Slots</p>
                </div>

                <div className="dashboard-card">
                    <h2>
                        {data.availableSlots}
                    </h2>

                    <p>Available</p>
                </div>

                <div className="dashboard-card">
                    <h2>
                        {data.bookedSlots}
                    </h2>

                    <p>Booked</p>
                </div>

               

            </div>

        </div>

    );
}

export default DashboardPage;