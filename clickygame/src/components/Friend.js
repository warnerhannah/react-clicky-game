import React from "react";
import "./friend.css";

function Friend(props) {
    return (
        <div className="friend">
            <img src={props.url} alt="Bobs Burgers Character" />
        </div>
    );
}

export default Friend;