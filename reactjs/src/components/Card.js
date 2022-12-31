import React from "react";
import cardImg from "../assets/img/cardImg.jpg";
import "./styles.css";

export const Card = ({ proveedor }) => {
  return (
    <div className="card shadow" style={{ width: "22rem" }}>
      <img className="card-img-top" src={proveedor.imagen} alt="Card cap"></img>
      <div className="card-body">
        <h5 className="card-title">{proveedor.name}</h5>
        <p className="card-text">{proveedor.informacion}</p>
        <a
          href={`/proveedor/${proveedor.id}`}
          className="btn btn-outline-primary"
        >
          Ver más
        </a>
      </div>
    </div>
  );
};
