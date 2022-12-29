import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { proveedorUnico } from "../Helpers/Proveedor";
import { proveedorUnicoPaquetes } from "../Helpers/Proveedor";
import "../assets/style/vermas.css";
import paqImg from "../components/resources/TestBg2.jpg";
import { Card } from "../components/Card2";
import { useNavigate } from "react-router-dom";

function VerMasProveedor() {
  const [proveedor, setproveedor] = useState(null);
  const params = useParams();

  const [paquetes, setpaquetes] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    proveedorUnico(params.id, setproveedor);
    proveedorUnicoPaquetes(params.id, setpaquetes);

    if (localStorage.getItem('vendorEmail')){
      localStorage.removeItem('vendorEmail');
    }
  
    if (localStorage.getItem('idPaquete')){
      localStorage.removeItem('idPaquete');
      localStorage.removeItem('namePaquete');
    }
  }, []);


  return (
    <div className="container-fluid mw-100 m-0 p-0">
      <div className="product-container">
        <div className="product d-flex justify-content-center">
          <div className="col-sm-10 p-3 post-container-p">
            <a className="btn backBtn" onClick={() => navigate(-1)}>
              Regresar
            </a>
            <div className="card p-2 paquete-post-p d-flex flex-row shadow">
              <div className="flex-column">
                <div className="imagen-paquete-container-p justify-content-center">
                  <img className="imagen-paquete" src={paqImg} alt="Imagen"></img>
                </div>
                <div className="resources-paquete d-flex flex-row p-3 justify-content-around">
                  <div className="paquete-src d-flex justify-content-center mt-2">
                    <h1>SRC</h1>
                  </div>
                  <div className="paquete-src d-flex justify-content-center mt-2">
                    <h1>SRC</h1>
                  </div>
                  <div className="paquete-src d-flex justify-content-center mt-2">
                    <h1>SRC</h1>
                  </div>
                </div>
              </div>
              <div className="paquete-info-container-p ms-3">
                <div className="card p-4 paquete-info-p">
                  {proveedor != null ? (
                    <div>
                      <h1>{proveedor.name}</h1>
                      <h5 style={{ color: "gray" }}>{proveedor.email}</h5>
                      <h6 style={{ color: "gray" }}>Num. {proveedor.id}</h6>
                      <p>{proveedor.informacion}</p>
                      <h3>Fechas</h3>
                    </div>
                  ) : (
                    "No hay proveedores"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {proveedor != null ? (
        <h2 style={{marginLeft: '9%', marginTop: '1%'}}>Paquetes de {proveedor.name}</h2>
        ) : (
          "No hay proveedores"
        )}
        <div className="lista-personajes-vermas cards2 justify-content-between">
          {paquetes != null
            ?( paquetes.map((paquete) => (
                <Card key={paquete.id} paquete={paquete} />
              ))
            ): "No hay paquetes"}
        </div>
      </div>

    </div>
  );
}

export default VerMasProveedor;
