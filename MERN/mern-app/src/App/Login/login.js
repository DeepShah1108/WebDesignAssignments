import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./login.css"

function Login(){
    

    const navigate = useNavigate()

    const [ user , setUser ] = useState({
        email: "",
        password: ""
    })
            
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
            
    const login = () => {
        const { email , password } = user

        try{
            if(email && password ) {
                axios.post("http://localhost:4000/user/login", user)
                .then(res => {
                    if(res.data.message){
                        alert(res.data.message)
                        navigate("/homepage")
                    }else{
                        alert(res.data.error)
                    }
                })      
            }else{
                alert("All fields are mandatory")
            }
        }catch{
            alert("Please try again")
        }
    }
          
    return (
        <form className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email}  onChange={handleChange}  placeholder="Enter Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Password"></input>
            <div className="button" onClick={login}>Login</div>
        </form>       
    )

}



export default Login


    // const navigate = useNavigate()

    // const [ user , setUser ] = useState({
    //     email: "",
    //     password: ""
    // })
        
    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }
        
    // const login = () => {
    //     const { email , password } = user

    //     try{
    //         if(email && password ) {
    //             axios.post("http://localhost:4000/user/login", user)
    //             .then(res => {
    //                 alert(res.data.message)
    //                 if(res.data.status === 200){
    //                     navigate("/homepage")
    //                 }   
    //             })
                
    //         }else{
    //             alert("All fields are mandatory")
    //         }
    //     }catch(error){
    //         alert(error)
    //     }
    // }  

    




    
