import React from "react"
import "./homepage.css"
import Navbar from "../Components/Navbar/navbar"
import Card from "../Components/Card/card"

function Homepage() {
    
    return (
        
        <div className="homepage">
            <Navbar />
            <Card color="This is the Homepage Section. This the landing page of the website" text="Homepage"/>
            <h2>This is the Homepage Section</h2>
        </div>   
            
    )
}

export default Homepage;