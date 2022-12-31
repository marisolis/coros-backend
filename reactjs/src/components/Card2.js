import React from "react";
import cardImg from "../assets/img/cardImg.jpg";
import "./styles.css";

export const Card = ({ paquete }) => {
  return (
    <div className="card shadow" style={{ width: "22em" }}>
      <img className="card-img-top" src={paquete.imagen} alt="Card cap"></img>
      <div className="card-body">
        <h5 className="card-title">{paquete.name}</h5>
        <p className="card-text">{paquete.descripcion}</p>
        <a href={`/paquete/${paquete.id}`} className="btn btn-outline-primary">
          Ver más
        </a>
      </div>
    </div>
  );
};
