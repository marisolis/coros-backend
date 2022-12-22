import React from "react";
import cardImg from "../assets/img/cardImg.jpg";
import './styles.css'

export const Card = ({ paquete }) => {
  return (
    <div className="card" style={{ width: "22rem" }}>
      <img className="card-img-top" src={cardImg} alt="Card cap"></img>
      <div className="card-body">
        <h5 className="card-title">{paquete.name}</h5>
        <p className="card-text">{paquete.descripcion}</p>
        <a href={`/paquete/${paquete.id}`} className="btn btn-primary">
          Ver más
        </a>
      </div>
    </div>
  );
};
