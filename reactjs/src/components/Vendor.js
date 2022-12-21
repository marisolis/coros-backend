import './styles.css';
import cardImg from '../components/resources/cardImg.jpg';
import paqImg from '../components/resources/TestBg2.jpg';
export default function Vendor() {

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
                                <h1>Nombre de proveedor</h1>
                                <p>Descripcion del proveedor</p>
                                <h3>Fechas</h3>
                                <h3>Fechas</h3>
                                <h3>Fechas</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cards2 d-flex justify-content-between">
                <div className="card" style={{ width: "22rem" }}>
                <img className="card-img-top" src={cardImg} alt="Card cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Titulo</h5>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </p>
                    <a href="/producto" className="btn btn-primary">
                    Ver más
                    </a>
                </div>
                </div>

                <div className="card" style={{ width: "22rem" }}>
                <img className="card-img-top" src={cardImg} alt="Card cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Titulo</h5>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                    Ver más
                    </a>
                </div>
                </div>

                <div className="card" style={{ width: "22rem" }}>
                <img className="card-img-top" src={cardImg} alt="Card cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Titulo</h5>
                    <p className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                    Ver más
                    </a>
                </div>
                </div>

            </div>
        </div>
    );
}