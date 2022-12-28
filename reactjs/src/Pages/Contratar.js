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

  const [nameC,setName] = useState(null);
  const [emailC,setEmail] = useState(null);
  const [phoneC,setPhone] = useState(null);
  const [evento,setEvento] = useState(null);
  const [lugar,setLugar] = useState(null);
  const [fecha,setFecha] = useState(null);
  
  useEffect( () => {
    var tokenUser = sessionStorage.getItem('token');
    if (tokenUser != null) {
      http.post('/me').then((res)=>{
        name = res.data.name;
        email = res.data.email;
        phone = res.data.phone;
        setName(name);
        setEmail(email);
        setPhone(phone);
      });
    }
  }, []);

  function enviarContrato() {
    
  }

  const submitForm = (e) =>{
    e.preventDefault();
    if (name != null && email != null && phone != null && evento != null && lugar != null && fecha != null) {
        console.log(nameC);
        console.log(emailC);
        console.log(phoneC);
        console.log(evento);
        console.log(lugar);
        console.log(fecha);

    }else{
        setModalInfo('Rellene todos los campos correctamente por favor.');
        handleShow();
    }
  }

  const [show, setShow] = useState(false);
  const [modalInfo, setModalInfo] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
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
                        <label className="form-label">Nombre completo*</label>
                        <input type="name" className="form-control" placeholder="Nombre completo"
                        id="name" defaultValue={name} readOnly required/>
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label">Correo electrónico*</label>
                        <input type="email" className="form-control" placeholder="Email"
                        id="email" defaultValue={email} readOnly required/>
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label">Número telefónico*</label>
                        <div className="prefixGroup">
                            <span className="prefixNum">+52</span>
                            <input type="tel" className="form-control prefixInput" placeholder="Número de telefóno"
                                id="telphone" defaultValue={phone} readOnly required/>
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label">Evento a realizar*</label>
                        <input type="text" className="form-control" placeholder="ej. Misa, Bautizo, (Evento en especifico)"
                            onChange={e=>setEvento(e.target.value)}
                        id="event" required/>
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label">Lugar*</label>
                        <input type="text" className="form-control" placeholder="ej. Tuxtla Gtz. Col. La Salle, Calle Quintana Roo, num. 397"
                            onChange={e=>setLugar(e.target.value)}
                        id="event" required/>
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label">Fecha*</label>
                        <input type="date" className="form-control" placeholder="Fecha"
                            onChange={e=>setFecha(e.target.value)}
                        id="event" required/>
                    </div>

                </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>Cancelar</Button>
        <Button variant='primary' onClick={submitForm}>Contratar</Button>
      </Modal.Footer>
    </Modal>
    </div>
    
  );
}

function Contratar() {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const submitForm = (e) =>{
    var tokenUser = sessionStorage.getItem('token')
    if (tokenUser != null) {
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