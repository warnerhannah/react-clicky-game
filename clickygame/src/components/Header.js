import React from "react";
import "./header.css";

function Header(props) {
    return (
        <div>
            <header>
                <h2>CLICKY GAME</h2>
                <h3>You guessed {props.guess}</h3>
                <div className="scores">
                    <h3>Score: {props.score}</h3>
                    <h3>   |   |   </h3>
                    <h3>Top Score: {props.topScore}</h3>
                </div>
            </header>
        </div>
    );
}

export default Header;
