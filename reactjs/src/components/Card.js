import React from "react";
import cardImg from "../assets/img/cardImg.jpg";

export const Card = ({ proveedor }) => {
  return (
    <div className="card" style={{ width: "22rem" }}>
      <img className="card-img-top" src={cardImg} alt="Card cap"></img>
      <div className="card-body">
        <h5 className="card-title">{proveedor.name}</h5>
        <p className="card-text">{proveedor.informacion}</p>
        <a href="#" className="btn btn-primary">
          Ver más
        </a>
      </div>
    </div>
  );
};
