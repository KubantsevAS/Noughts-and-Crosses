import React from "react";
import Square from "./Square";
import "./styleForComp.css"

const Board = () => {
    return (
        <div className="board">
            <div className="boardRow">
                <Square i="1"/>
                <Square i="2"/>
                <Square i="3"/>
            </div>
            <div className="boardRow">
                <Square i="4"/>
                <Square i="5"/>
                <Square i="6"/>
            </div>
            <div className="boardRow">
                <Square i="7"/>
                <Square i="8"/>
                <Square i="9"/>
            </div>
        </div>
    )
}

export default Board;