import React from "react";
import "./Card.css";
function Card({ name, front_default }) {
  return (
    <div className="card">
      <h3>
        Preview: <img src={front_default} alt="" />
      </h3>
      <h3>Name: {name}</h3>
    </div>
  );
}

export default Card;
