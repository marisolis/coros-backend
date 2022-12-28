import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AuthUser from './AuthUser';

export default function Register() {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [phone,setPhone] = useState(null);
    const [type,setType] = useState('client');

    const submitForm = (e) =>{
        // api call
        e.preventDefault();
        if (name != null && email != null && password != null && phone != null) {
            peticionForm();
        }else{
            setModalInfo('Rellene todos los campos correctamente por favor.');
            handleShow();
        }
    }

    const peticionForm = () => {
        http.post('/register',{email:email,password:password,name:name,phone:phone, type:type}).then((res)=>{
            console.log(res);
            navigate('/login')
        }).catch((error) => {
            console.log(error.response);
            if (error.response.status === 500){
                setModalInfo('Uno de estos datos ya ha sido registrado. (Error 500)');
                handleShow();
            }
        })
    }

    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function showPass() {
        var x = document.getElementById("pwd");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }    

    return(
        <div className="row justify-content-center pt-5 mastheadBg">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Notificación</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalInfo}</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Aceptar
                </Button>
                </Modal.Footer>
            </Modal>
            <div className="col-sm-4">
                <form onSubmit={submitForm} className="card p-4 shadow">
                    <h1 className="text-center mb-3">Registrarse </h1>

                    <div className="form-group">
                        <label className="form-label">Nombre completo*</label>
                        <input type="name" className="form-control" placeholder="Nombre completo"
                            onChange={e=>setName(e.target.value)}
                        id="name" required/>
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label">Correo electrónico*</label>
                        <input type="email" className="form-control" placeholder="Email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" required/>
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label">Número telefónico*</label>
                        <div className="prefixGroup">
                            <span className="prefixNum">+52</span>
                            <input type="tel" className="form-control prefixInput" placeholder="Número de teléfono"
                                onChange={e=>setPhone(e.target.value)}
                                id="telphone" required/>
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label">Contraseña*</label>
                        <input type="password" className="form-control" placeholder="Contraseña"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" required/>
                        <input className="mt-3" type="checkbox" onClick={showPass}/> Mostrar contraseña
                    </div>

                    <button type="submit" onClick={submitForm} onSubmit={submitForm} className="btn btn-primary mt-4">Crear cuenta</button>
                    <a className="form-link mt-4 text-center" href="/login">¿Ya tienes una cuenta?</a>
                    <a className="form-link mt-2 text-center" href="/registervendor">¿Quieres ser un proveedor?</a>
                </form>
            </div>
        </div>
    )
}