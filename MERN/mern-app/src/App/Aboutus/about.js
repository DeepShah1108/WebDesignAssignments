import React from 'react'
import "./about.css"
import Navbar from "../Components/Navbar/navbar"
import Card from "../Components/Card/card"

function About() {
  return (
    <div className="homepage">
            <Navbar />
            <Card color="This is the Aboutus Section." text="Aboutus"/>
            <h2>This is the AboutUs Page</h2>
        </div>
  )
}

export default About