import { Component } from "react";
import { Link } from "react-router-dom"
import { MenuData } from "./MenuData"
import './navbar.css'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar-items">
                <h1>LOGO</h1>
                <ul className="nav-menu">
                    {MenuData.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link to = {item.url} className={item.cName}><i className={item.icon}></i>{item.title}</Link>{"   "}
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
        
    }
}

export default Navbar