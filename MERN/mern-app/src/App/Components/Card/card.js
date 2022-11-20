import React, { Component } from "react";
import "./card.css"


class Square extends Component {
    render() {
        var squareStyle = {
            height: 150,
            width: 300,
            backgroundColor: "white",
        };
        var pStyle = {
            padding: 20
        }
        
        return(
            <div style={squareStyle}>
                <p style={pStyle}>{this.props.color}</p>
            </div>
        );
    }
}

class Label extends Component {
    render() {
        var labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 13,
            margin: 0,
            color: "white"
        };
        
        return (
            <p style={labelStyle}>{this.props.text}</p>
        );
    }
}

class Card extends Component {
    render() {
        var cardStyle = {
            height: 200,
            width: 300,
            padding: 0,
            backgroundColor: "#222",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };

        return (
            <div style={cardStyle} className="container">
                <Square color={this.props.color}/>
                <Label text={this.props.text}/>
            </div>
        );
    }
}

export default Card

