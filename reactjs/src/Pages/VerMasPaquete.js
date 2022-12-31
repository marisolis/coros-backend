import paqImg from "../components/resources/TestBg2.jpg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { paqueteUnico } from "../Helpers/Paquete";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Contratar from "./Contratar";
import "../assets/style/vermas.css";
import audio from "../assets/resources/audio-test.mp3";

function VerMasPaquete() {
  let navigate = useNavigate();

  const [paquete, setpaquete] = useState(null);
  const params = useParams();

  useEffect(() => {
    paqueteUnico(params.id, setpaquete);
  }, []);

  if (paquete != null) {
    axios
      .get(`http://127.0.0.1:8000/api/v1/empresas/${paquete.empresa_id}`)
      .then((response) => {
        document.getElementById("proveedorName").textContent =
          response.data.data.name;
        localStorage.setItem("vendorEmail", response.data.data.email);
        localStorage.setItem("vendorID", response.data.data.id);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <div className="container-fluid mw-100 m-0 p-0">
      <div className="product d-flex justify-content-center">
        {" "}
        {paquete != null ? (
          <div className="col-sm-10 p-3 post-container-p">
            <a className="btn backBtn" onClick={() => navigate(-1)}>
              Regresar
            </a>
            <div className="card p-2 paquete-post-p d-flex flex-row shadow">
              <div className="imagen-paquete-container-p justify-content-center">
                <img
                  className="imagen-paquete"
                  src={paquete.imagen}
                  alt="Imagen"
                ></img>
              </div>
              <div className="paquete-info-container-p ms-2">
                <div
                  className="card p-4 paquete-info-p"
                  style={{ borderRadius: "0" }}
                >
                  <div
                    className="info-paquete"
                    style={{ marginBottom: "10px" }}
                  >
                    <h1 className="vendor-title">{paquete.name}</h1>
                    <h5
                      id="proveedorName"
                      style={{ color: "gray" }}
                      className="vendor-name"
                    >
                      ...
                    </h5>
                    <h6 style={{ color: "gray" }}>Num. {paquete.id}</h6>
                    <div
                      className="vendor-desc-container"
                      style={{
                        overflowY: "auto",
                        maxHeight: "285px",
                        marginBottom: "10px",
                      }}
                    >
                      <p className="vendor-desc">{paquete.descripcion}</p>
                    </div>
                    <h2>${paquete.precio} MXN</h2>
                  </div>
                  <Contratar />
                </div>
              </div>
            </div>
            <h2 style={{ marginTop: "2%", marginBottom: "2%" }}>Audio</h2>
            <div className="card col-sm-6 shadow p-2 mb-4 audio-container">
              <audio
                src={paquete.audio}
                className="audio-control"
                controls="controls"
                preload="none"
              ></audio>
            </div>
          </div>
        ) : (
          "No disponible"
        )}
      </div>
    </div>
  );
}

export default VerMasPaquete;
