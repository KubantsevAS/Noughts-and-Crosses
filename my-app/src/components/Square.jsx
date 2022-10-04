import React from "react";
import "./styleForComp.css"

const Square = (i) =>{

    return (
        <div id={i} className="square" onClick={() => {console.log(i)}}></div>
        )
}

export default Square;