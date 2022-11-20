// import axios from "axios";
import React, {useState, useEffect } from "react"
import { useNavigate} from "react-router-dom"
import './login.css'

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    
    useEffect(() => {
        if(localStorage.getItem('User')){
            navigate("/homepage")
        }
    }, [])

    async function login(){
        let result = await fetch("http://localhost:4000/user/login" ,{
            method: "POST",
            crossDomain: true,
            header: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow_Origin":"*",
            },
            body: JSON.stringify({
                email,
                password,
            }) 
        })
        await result.json()
        localStorage.setItem("User", JSON.stringify(result))
        navigate("/homepage")
    }

    

    return(
        <form className="login">
            <h1>Login</h1>
            <input type="email" name="email"  onChange={(e) => setEmail(e.target.value)}  placeholder="Enter Email"></input>
            <input type="password" name="password"  onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"></input>
            <div className="button" onClick={login}>Login</div>
        </form> 
    )
}

