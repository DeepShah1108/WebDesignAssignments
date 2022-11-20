import React, { Component } from "react";

import axios from "axios"
import './login.css'


export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        }  
        this.handleSubmit = this.handleSubmit.bind(this)  
    }
    handleSubmit(e){
        e.preventDefault()
        const { email, password } = this.state
        
        console.log(email,password)
        axios.post("http://localhost:4000/user/login" ,{
            method: "POST",
            crossDomain: true,
            header: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow_Origin":"*",
            },
            body: JSON.stringify({
                email,
                password,
            }) 
        })
        .then()
    }
    render(){
        return(
            <form className="login" onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <input type="email" onChange={(e) => this.setState({ email: e.target.value})}  placeholder="Enter Email"></input>
                <input type="password" onChange={(e) => this.setState({ password: e.target.value})} placeholder="Enter Password"></input>
                <div className="button" onClick={this.handleSubmit}>Login</div>
            </form> 
        )
    }
}

