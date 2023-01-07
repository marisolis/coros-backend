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

    if (localStorage.getItem("vendorEmail")) {
      localStorage.removeItem("vendorEmail");
      localStorage.removeItem("vendorID");
    }

    if (localStorage.getItem("idPaquete")) {
      localStorage.removeItem("idPaquete");
      localStorage.removeItem("namePaquete");
    }
  }, []);

  return (
    <div className="container-fluid mw-100 m-0 p-0">
      <div className="product d-flex justify-content-center">
        {proveedor != null ? (
          <div className="col-sm-10 p-3 post-container-p">
            <a className="btn backBtn" onClick={() => navigate(-1)}>
              Regresar
            </a>
            <div className="card p-2 paquete-post-p d-flex flex-row shadow">
              <div className="imagen-paquete-container-p justify-content-center">
                <img
                  className="imagen-paquete"
                  src={proveedor.imagen}
                  alt="Imagen"
                ></img>
              </div>

              <div className="paquete-info-container-p ms-2">
                <div
                  className="card p-4 paquete-info-p"
                  style={{ borderRadius: "0" }}
                >
                  <div style={{ margin: "0" }}>
                    <h1>{proveedor.name}</h1>
                    <h5 style={{ color: "gray" }}>{proveedor.email}</h5>
                    <h6 style={{ color: "gray" }}>No. {proveedor.id}</h6>
                    <div
                      className="vendor-desc-container"
                      style={{
                        overflowY: "auto",
                        maxHeight: "350px",
                        marginBottom: "10px",
                      }}
                    >
                      <p className="vendor-desc">{proveedor.informacion}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          "No hay proveedores"
        )}
      </div>
      {proveedor != null ? (
        <h2 style={{ marginLeft: "9%", marginTop: "2%" }}>
          Paquetes de {proveedor.name}
        </h2>
      ) : (
        "No hay proveedores"
      )}
      <div className="lista-personajes-vermas cards2 justify-content-between">
        {paquetes != null
          ? paquetes.map((paquete) => (
              <Card key={paquete.id} paquete={paquete} />
            ))
          : "No hay paquetes"}
      </div>
    </div>
  );
}

export default VerMasProveedor;
