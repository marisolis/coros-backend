import paqImg from "../components/resources/TestBg2.jpg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { paqueteUnico } from "../Helpers/Paquete";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VerMasPaquete() {

  let navigate = useNavigate();

  const [paquete, setpaquete] = useState(null);
  const params = useParams();

  useEffect( () => {
    paqueteUnico(params.id, setpaquete);
  }, []);

  if(paquete != null){
    axios.get(`http://127.0.0.1:8000/api/v1/empresas/${paquete.empresa_id}`)
    .then(response => {
      document.getElementById('proveedorName').textContent = response.data.data.name;
    })
    .catch((error => {
      console.log(error.response);
    }))
  }


  return (
    <div className="container-fluid mw-100 m-0 p-0">
      <div className="product d-flex justify-content-center">
        <div className="col-sm-10 p-3 post-container">
          <a className="btn backBtn" onClick={() => navigate(-1)}>
            Regresar
          </a>
          <div className="card p-2 paquete-post d-flex flex-row">
            <div className="flex-column">
              <div className="imagen-paquete-container justify-content-center">
                <img className="imagen-paquete" src={paqImg} alt="Imagen"></img>
              </div>
              <div className="resources-paquete d-flex flex-row p-2 justify-content-between">
                <div className="paquete-src d-flex justify-content-center mt-2">
                  <h1>Videos/Audios</h1>
                </div>
                <div className="paquete-src d-flex justify-content-center mt-2">
                  <h1>Videos/Audios</h1>
                </div>
                <div className="paquete-src d-flex justify-content-center mt-2">
                  <h1>Videos/Audios</h1>
                </div>
              </div>
            </div>
            <div className="paquete-info-container col-sm-3 ms-3">
              <div className="card p-4 paquete-info">
                {paquete != null ? (
                    <div>
                      <h1>{paquete.name}</h1>
                      <h5 id="proveedorName" style={{ color: "gray" }}>...</h5>
                      <h6 style={{ color: "gray" }}>Num. {paquete.id}</h6>
                      <p>{paquete.descripcion}</p>
                      <h2>${paquete.precio} MXN</h2>
                  </div>
                ) : (
                  "No hay proveedores"
                  )}
                <button className="btn btn-primary mt-2 btn-contratar">
                  Contratar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerMasPaquete;
