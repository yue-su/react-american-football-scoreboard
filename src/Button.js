import React from "react";
import "./App.css";

const Button = (props) => {

    return (
        <button className={props.className} onClick={props.action}>{props.text}</button>
    )

}


export default Button