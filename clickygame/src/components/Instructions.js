import React from "react";
import "./instructions.css";

function Instructions(props) {
    return (
        <div className="inst">
            <h1>Clicky Game</h1>
            <h3 className="inst">Click on an image to earn a point, but don't click on it more than once!</h3>
        </div>
    );
}

export default Instructions;
