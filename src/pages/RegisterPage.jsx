import { useEffect, useState } from "react";
import axios from "axios";
import api from "../services/api";
import  login from "./LoginPage";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [username,setUsername] = useState("");
     const [password,setPassword] = useState("");
      const navigate = useNavigate();
     function Register()
     {
       axios.post(
    "http://localhost:8081/auth/register",
    {
        username,
        password
    }
)
.then(()=>{
    alert("Registration Successful");
});
     }
     
     return (
        <div>
        <input
    type="text"
    placeholder="Username"
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
/>

<input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
/>
   <button onClick={Register}>
    register
   </button>
    <br /><br />
    <button onClick={() => navigate("/login")}>
                Login
            </button>
        </div>
     );

}
     export default RegisterPage;
