import api from "../services/api";

function Login() {

    api.post(
        "/auth/login",
        {
            username,
            password
        }
    )
    .then((response)=>{

        localStorage.setItem(
            "token",
            response.data.token
        );

        localStorage.setItem(
            "role",
            response.data.role
        );

    });

}