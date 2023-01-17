import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import './styles.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function VendorDashboard() {
    
    const {token,logout} = AuthUser();
    const {http} = AuthUser();
    const [userdetail,setUserdetail] = useState('');

    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [informacion, setInformacion] = useState(null);
    const [imagen, setImagen] = useState(null);
    const [audio, setAudio] = useState(null);

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const logoutUser = () => {
            logout();
        }

    const fetchUserDetail = () =>{
        http.post('/me').then((res)=>{
            setUserdetail(res.data);
        });
    }

    const submitForm = (e) =>{
        // api call
        e.preventDefault();
        if (name != null && price != null && imagen != null && audio != null && informacion != null) {
            document.getElementById('loader-line').style.display = 'flex';
            peticionForm();
        }else{
            setModalInfo2('Rellene todos los campos correctamente por favor.');
            handleShow2();
        }
    }

    const peticionForm = () => {
        http.post('http://127.0.0.1:8000/api/v1/paquetes/',{name:name,price:price,descripcion:informacion,imagen:imagen,audio:audio}).then((res)=>{
            sleep(3000);
            handleClose();
        }).catch((error) => {
            console.log(error.response);
            document.getElementById('loader-line').style.display = 'none';
            if (error.response.status === 500){
                setModalInfo2('Uno de estos datos ya ha sido registrado. (Error 500)');
                handleShow2();
            }
        })
    }

    useEffect(() => {
        if (token !== undefined) {
            fetchUserDetail();
          }
      }, []);

      const [show, setShow] = useState(false);
      const [modalInfo, setModalInfo] = useState();
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const [show2, setShow2] = useState(false);
      const [modalInfo2, setModalInfo2] = useState();
    
      const handleClose2 = () => setShow2(false);
      const handleShow2 = () => setShow2(true);

    return(
        <div className='d-flex'>
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                <Modal.Title>Notificación</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalInfo2}</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose2}>
                    Aceptar
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show} onHide={handleClose}>
                <div id='loader-line' className="loader-line" style={{display: 'none'}}></div>
                <Modal.Header closeButton>
                <Modal.Title>+ Nuevo paquete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={submitForm} className="p-1">

                        <div className="form-group">
                            <label className="form-label">Nombre*</label>
                            <input type="name" className="form-control" placeholder="Nombre del paquete"
                                onChange={e=>setName(e.target.value)}
                            id="name" maxLength='45' required/>
                        </div>

                        <div className="form-group mt-3">
                            <label className="form-label">Precio*</label>
                            <div className="prefixGroup">
                                <span className="prefixNum">$</span>
                                <input type="num" className="form-control prefixInput" placeholder="Precio del paquete. ej. 1000"
                                    onChange={e=>setPrice(e.target.value)}
                                    id="price" required/>
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label>Descripción del paquete*</label>
                            <textarea
                            type="text"
                            className="form-control"
                            placeholder="Descripción del paquete"
                            onChange={(e) => setInformacion(e.target.value)}
                            id="desc"
                            maxLength="1000"
                            required
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label className="form-label">Imagen*</label>
                            <input
                            className="form-control"
                            accept="image/png, image/jpeg"
                            type="file"
                            id="img"
                            onChange={(e) => setImagen(e.target.files[0])}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label className="form-label">Audio*</label>
                            <input
                            className="form-control"
                            accept="audio/mp3, audio/wav, audio/webm"
                            type="file"
                            id="audio"
                            onChange={(e) => setAudio(e.target.files[0])}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={submitForm}>
                    Subir paquete
                </Button>
                </Modal.Footer>
            </Modal>
            <div className="col-sm-3 p-5">
                <div className="perfil card p-4 shadow" style={{maxHeight: '800px', minHeight: '440px'}}>
                    <h1 className="text-center">Perfil Proveedor</h1>

                    <div className="form-group mt-3">
                        <h4>Nombre</h4>
                        <p>{userdetail.name}</p>
                    </div>

                    <div className="form-group mt-3">
                        <h4>Correo electrónico</h4>
                        <p>{userdetail.email}</p>
                    </div>

                    <div className="form-group mt-3">
                        <h4>Número telefónico</h4>
                        <p>{userdetail.phone}</p>
                    </div>

                    <button className="btn btn-primary mt-3" onClick={handleShow}>+ Nuevo paquete</button>
                    <button className="btn btn-danger mt-3" onClick={logoutUser}>Cerrar sesión</button>

                </div>
            </div>
            <div className="col-sm-8 p-5 contrats-container">
                <div className="contrats card p-4 shadow" style={{maxHeight: '800px', minHeight: '440px'}}>

                    <h1 className="text-center">Contratos</h1>

                    <div style={{overflowY: 'auto'}}>

                        <div className="form-group mt-3">
                            <h4>Nombre</h4>
                            <p>{userdetail.name}</p>
                        </div>

                        <div className="form-group mt-3">
                            <h4>Correo electrónico</h4>
                            <p>{userdetail.email}</p>
                        </div>

                        <div className="form-group mt-3">
                            <h4>Número telefónico</h4>
                            <p>{userdetail.phone}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}