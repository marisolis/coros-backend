import './styles.css';
import paqImg from '../components/resources/TestBg2.jpg';
export default function Product() {
    
    return(
        <div className='container-fluid mw-100 m-0 p-0'>
            <div className='product d-flex justify-content-center'>
                <div className="col-sm-10 p-3 post-container">
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
                                <h1>Nombre paquete</h1>
                                <h4>Nombre del proveedor</h4>
                                <p>Descripcion del paquete</p>
                                <h2>$ Precio</h2>
                                <h2>$ Precio</h2>
                                <h2>$ Precio</h2>
                                <button className="btn btn-primary mt-2 btn-contratar">Contratar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}