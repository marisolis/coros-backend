import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from '../components/AuthUser';

var name;
var email;
var phone;

function MyVerticallyCenteredModal(props) {

  const {http,setToken} = AuthUser();
  const [event,setEvent] = useState();
  
  useEffect( () => {
    var tokenUser = sessionStorage.getItem('token')
    if (tokenUser != null) {
      http.post('/me').then((res)=>{
        name = res.data.name;
        email = res.data.email;
        phone = res.data.phone;
      });
    }
  }, []);

  const submitForm = (e) =>{
    alert('Formulario enviado');
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contratar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
                <form onSubmit={submitForm} className="p-1">

                    <div className="form-group">
                        <label>Nombre completo*</label>
                        <input type="name" className="form-control" placeholder="Nombre completo"
                        id="name" defaultValue={name} readOnly required/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Correo electrónico*</label>
                        <input type="email" className="form-control" placeholder="Email"
                        id="email" defaultValue={email} readOnly required/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Número telefónico*</label>
                        <div className="prefixGroup">
                            <span className="prefixNum">+52</span>
                            <input type="tel" className="form-control prefixInput" placeholder="Número de telefóno"
                                id="telphone" defaultValue={phone} readOnly required/>
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <label>Evento a realizar*</label>
                        <input type="text" className="form-control" placeholder="Evento"
                            onChange={e=>setEvent(e.target.value)}
                        id="event" required/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Lugar*</label>
                        <input type="text" className="form-control" placeholder="Lugar"
                            onChange={e=>setEvent(e.target.value)}
                        id="event" required/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Fecha*</label>
                        <input type="text" className="form-control" placeholder="Fecha"
                            onChange={e=>setEvent(e.target.value)}
                        id="event" required/>
                    </div>

                </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>Cerrar</Button>
        <Button variant='primary' onClick={submitForm}>Contratar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Contratar() {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const submitForm = (e) =>{
    var tokenUser = sessionStorage.getItem('token')
    if (tokenUser != null) {
      console.log(tokenUser);
      setModalShow(true);
    }else{
      navigate('/login');
    }
}

  return (
    <>
      <Button variant="primary" onClick={() => submitForm()}>
        Contratar
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Contratar;