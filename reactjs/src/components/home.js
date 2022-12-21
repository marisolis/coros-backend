import { Routes, Route } from "react-router-dom";
import cardImg from "../components/resources/cardImg.jpg";
import Product from "./product";
import "./styles.css";

export default function Home() {
  return (
    <div className="container-fluid mw-100 m-0 p-0">
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="fw-light">Vertically Centered Masthead Content</h1>
              <p className="lead">A great starter layout for a landing page</p>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{
          maxWidth: "100%",
          backgroundColor: "skyblue",
          height: "250px",
        }}
      >
        <div className="col-12 text-center">
          <h1 className="fw-light">Seccion para filtrado</h1>
          <p className="lead">Filtrado para encontrar proveedores</p>
        </div>
      </div>
    </div>
  );
}
