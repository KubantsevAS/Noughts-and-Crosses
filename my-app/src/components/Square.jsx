import React, {useState} from "react";
import "./styleForComp.css"
import Board from "./Board";

const Square = (props) => {
    

    return (
        <div className="square" onClick={props.onClick}>
            {props.value}
        </div>
        )
}

export default Square;