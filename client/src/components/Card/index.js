import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img  alt={props.name} src={props.image} />
        <span onClick={() => props.cardClicked(props.id)}></span>
      </div>
    </div>
  );
}

export default Card;
