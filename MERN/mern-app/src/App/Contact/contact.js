import React from "react"
import "./contact.css"
import Navbar from "../Components/Navbar/navbar"
import Card from "../Components/Card/card"

function Contact() {
    return (
        <div className="homepage">
                <Navbar />
                <Card color="This is the Contact Section." text="Aboutus"/>
                <h2>This is the Contact Page</h2>
            </div>
      )
}

export default Contact