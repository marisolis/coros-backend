import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AuthUser from "./AuthUser";

export default function Login() {
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = (e) => {
    // api call
    e.preventDefault();
    document.getElementById('loader-line').style.display = 'flex';
    
    http.post("/login", { email: email, password: password }).then((res) => {
      setToken(res.data.user, res.data.access_token);
    }).catch((error) => {
        console.log(error.response);
        if (error.response.status === 401){
          document.getElementById('loader-line').style.display = 'none';
          handleShow();
        }
      })
  };

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


  return (
    <div className="row justify-content-center pt-5 mastheadBg">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Notificación</Modal.Title>
        </Modal.Header>
        <Modal.Body>Datos incorrectos.</Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
            Aceptar
        </Button>
        </Modal.Footer>
      </Modal>
      <div className="col-sm-4 login-container ps-0 pe-0">
      <div id='loader-line' className="loader-line" style={{display: 'none'}}></div>
        <form onSubmit={submitForm} className="card login p-4 shadow">
          <h1 className="text-center mb-3">Iniciar sesión</h1>
          <div className="form-group">
            <label className="form-label">Correo electrónico*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div className="form-group mt-3">
            <label className="form-label">Contraseña*</label>
            <div className="input-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                id="pwd"
              />
            </div>
            <input className="mt-3" type="checkbox" onClick={showPass}/> Mostrar contraseña
            
          </div>

          <div className="form-group">
            <input className="mt-3" type="checkbox" defaultChecked disabled/> Recuérdame
          </div>
          
          <button
            type="submit"
            onClick={submitForm}
            onSubmit={submitForm}
            className="btn btn-primary mt-4"
          >
            Entrar
          </button>
          <a  className="form-link mt-4 text-center" href="/register">
            Crear cuenta
          </a>
        </form>
      </div>
    </div>
  );
}
