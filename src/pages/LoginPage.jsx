import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import RegisterPage from "./RegisterPage";

 function LoginPage() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
     function Login()
     {
        axios.post(
    "http://localhost:8081/auth/login",
    {
        username,
        password
    }
        )
        .then((response) => {
            localStorage.setItem(
                "token",
                response.data.token
            );
            localStorage.setItem(
                "role",
                response.data.role
            );
            navigate("/stations");
        })
        .catch((error) => {
    alert("Login failed. Please check your credentials.");
}   
)

     
     }
     return (
       <div>
        <h1>Login</h1>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                    setUsername(e.target.value)
                }
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />

            <br /><br />

            <button onClick={Login}>
                Login
            </button>
            
            <br /><br />
            <button onClick={() => navigate("/register")}>
                Register
            </button>

       </div>
     );
 }
 export default LoginPage;