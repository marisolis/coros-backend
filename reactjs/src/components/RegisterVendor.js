import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AuthUser from './AuthUser';

export default function RegisterVendor() {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [phone,setPhone] = useState();
    const [type,setType] = useState('vendor');
    const [informacion,setInformacion] = useState();
    const [nameVendor,setNameVendor] = useState();
    const [imagen,setImagen] = useState(null);

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const submitForm = (e) =>{
        // api call
        e.preventDefault();
        if (name != null && email != null && password != null && phone != null && nameVendor != null && informacion != null) {
            document.getElementById('loader-line').style.visibility = 'visible';
            peticionFormUser();
        }else{
            handleShow();
        }
    }

    const peticionFormUser = async () => {
        await http.post('/register',{email:email,password:password,name:name,phone:phone, type:type}).then((res)=>{
            peticionFormVendor();
        }).catch((error) => {
            console.log(error.response);
        })
    }

    const peticionFormVendor = () => {

        http.post('http://127.0.0.1:8000/api/v1/empresas/',{name:nameVendor,num_Telefono:phone,informacion:informacion,email:email,imagen:imagen}).then((res)=>{
            sleep(4000);
            navigate('/login')
        }).catch((error) => {
            console.log(error.response);
        })
    }

    const [show, setShow] = useState(false);

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
        <div className="row justify-content-center pt-5">
             <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Notificación</Modal.Title>
                </Modal.Header>
                <Modal.Body>Rellene todos los campos correctamente por favor.</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Aceptar
                </Button>
                </Modal.Footer>
            </Modal>
            <div className="col-sm-4 login-container">
            <div id='loader-line' className="loader-line" style={{visibility: 'hidden'}}></div>
                <form onSubmit={submitForm} className="card login p-4 mb-5 shadow">
                    <h1 className="text-center mb-1">Registrarse</h1>
                    <h3 className="text-center mb-3" style={{color: 'gray'}}>Proveedor</h3>
            
                    <div className="form-group">
                        <label>Nombre completo*</label>
                        <input type="name" className="form-control" placeholder="Nombre completo"
                            onChange={e=>setName(e.target.value)}
                        id="name" maxLength='45' required/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Nombre de proveedor*</label>
                        <input type="name" className="form-control" placeholder="Nombre de proveedor"
                            onChange={e=>setNameVendor(e.target.value)}
                        id="nameVendor" maxLength='35' required/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Descripción de proveedor*</label>
                        <textarea type="name" className="form-control" placeholder="Descripción de proveedor"
                            onChange={e=>setInformacion(e.target.value)}
                        id="desc" maxLength='1000' required/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Imagen de proveedor*</label>
                        <input className="form-control" accept="image/png, image/jpeg" type="file" id="img"/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Correo electrónico*</label>
                        <input type="email" className="form-control" placeholder="Email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" maxLength='45' required/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Número telefónico*</label>
                        <div className="prefixGroup">
                            <span className="prefixNum">+52</span>
                            <input type="tel" className="form-control prefixInput" placeholder="Número de teléfono"
                                onChange={e=>setPhone(e.target.value)}
                                id="telphone" maxLength='10' required/>
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <label>Contraseña*</label>
                        <input type="password" className="form-control" placeholder="Contraseña"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" required/>
                        <input className="mt-3" type="checkbox" onClick={showPass}/> Mostrar contraseña
                    </div>

                    <button type="submit" onClick={submitForm} onSubmit={submitForm} className="btn btn-primary mt-4">Crear cuenta</button>
                    <a className="form-link mt-4 text-center" href="/login">¿Ya tienes una cuenta?</a>
                    <a className="form-link mt-2 text-center" href="/register">¿Quieres ser un cliente?</a>
                </form>
            </div>
        </div>
    )
}