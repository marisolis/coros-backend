import paqImg from '../components/resources/TestBg2.jpg';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { paqueteUnico } from '../Helpers/Paquete';
import { useNavigate } from "react-router-dom";

export default function VerMasPaquete() {

    let navigate = useNavigate();

    const [paquete, setpaquete] = useState(null);
    const params = useParams();

    useEffect(() => {
      paqueteUnico(params.id, setpaquete);
    }, []);

    return(
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
                                {paquete != null ? (
                                    <div>
                                        <h1>{paquete.name}</h1>
                                        <h5 style={{color: 'gray'}}>Num. {paquete.id}</h5>
                                        <p>{paquete.descripcion}</p>
                                        <h2>${paquete.precio} MXN</h2>
                                    </div>
                                    ) : (
                                    "No hay proveedores"
                                )}
                                <button className="btn btn-primary mt-2 btn-contratar">Contratar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}