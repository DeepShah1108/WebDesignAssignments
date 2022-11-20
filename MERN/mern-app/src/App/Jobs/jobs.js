import React from "react"
import "./jobs.css"
import Navbar from "../Components/Navbar/navbar"
import Card from "../Components/Card/card"

function Jobs() {

    return (
        <div className="homepage">
                <Navbar />
                <Card color="This is the Jobs Section." text="Aboutus"/>
                <h2>This is the Jobs Section</h2>
            </div>
      )
}

export default Jobs