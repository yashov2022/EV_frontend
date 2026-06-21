import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();
    
    const role =
        localStorage.getItem("role");
     
    function logout() {

        localStorage.removeItem("token");

        localStorage.removeItem("role");

        navigate("/login");

    }

    return (

        <div className="button-container">

         

            {
                role === "USER" &&

                <button
                    onClick={() =>
                        navigate("/bookings")
                    }
                >
                    Booking History
                </button>

            }

            <button
                onClick={() =>
                    navigate("/map")
                }
            >
                Map
            </button>

            {
                role === "ADMIN" &&

                <button
                    onClick={() =>
                        navigate("/dashboard")
                    }
                >
                    Dashboard
                </button>

            }

            <button
                onClick={logout}
            >
                Logout
            </button>

        </div>

    );

}

export default Navbar;