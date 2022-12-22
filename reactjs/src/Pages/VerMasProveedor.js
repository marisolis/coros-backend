import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { proveedorUnico } from "../Helpers/Proveedor";
import { paquetesLista } from "../Helpers/Paquete";
import "../assets/style/vermas.css";
import paqImg from '../components/resources/TestBg2.jpg';
import { Card } from "../components/Card2";
import { useNavigate } from "react-router-dom";

function VerMasProveedor() {

  const [proveedor, setproveedor] = useState(null);
  const params = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    proveedorUnico(params.id, setproveedor);
  }, []);

  const [paquetes, setpaquetes] = useState(null);

  useEffect(() => {
    paquetesLista(setpaquetes);
  }, []);

  return (
        <div className='container-fluid mw-100 m-0 p-0'>
            <div className='product d-flex justify-content-center'>
                <div className="col-sm-10 p-3 post-container">
                <button className="btn backBtn" onClick={() => navigate(-1)}>Regresar</button>
                    <div className="card p-2 paquete-post d-flex flex-row">
                        <div className='flex-column'>
                            <div className='imagen-paquete-container justify-content-center'>
                                <img className='imagen-paquete' src={paqImg} alt='Imagen'></img>
                            </div>
                            <div className='resources-paquete d-flex flex-row p-2 justify-content-between'>
                                <div className='paquete-src d-flex justify-content-center mt-2'>
                                    <h1>Videos/Audios</h1>
                                </div>
                                <div className='paquete-src d-flex justify-content-center mt-2'>
                                    <h1>Videos/Audios</h1>
                                </div>
                                <div className='paquete-src d-flex justify-content-center mt-2'>
                                    <h1>Videos/Audios</h1>
                                </div>
                            </div>
                        </div>
                        <div className="paquete-info-container col-sm-3 ms-3">
                            <div className="card p-4 paquete-info">
                                {proveedor != null ? (
                                <div>
                                    <h1>{proveedor.name}</h1>
                                    <h5 style={{color: 'gray'}}>Num. {proveedor.id}</h5>
                                    <p>Descripcion del proveedor</p>
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
                <div className="lista-personajes-vermas cards2 justify-content-between">
                    {paquetes != null
                    ? paquetes.map((paquete) => (
                        <Card key={paquete.id} paquete={paquete} />
                        ))
                    : "No hay proveedores"}
                </div>
        </div>
  );
}

export default VerMasProveedor;
