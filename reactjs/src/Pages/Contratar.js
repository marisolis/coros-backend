import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from '../components/AuthUser';

function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate();
  const {http,setToken} = AuthUser();
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [event,setEvent] = useState();
  const [phone,setPhone] = useState();

  const submitForm = (e) =>{
    // api call
    // e.preventDefault();
    // http.post('/register',{email:email,name:name,phone:phone}).then((res)=>{
    //     navigate('/login')
    // })
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
                            onChange={e=>setName(e.target.value)}
                        id="name" required/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Correo electrónico*</label>
                        <input type="email" className="form-control" placeholder="Email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" required/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Número telefónico*</label>
                        <div className="prefixGroup">
                            <span className="prefixNum">+52</span>
                            <input type="tel" className="form-control prefixInput" placeholder="Número de telefóno"
                                onChange={e=>setPhone(e.target.value)}
                                id="telphone" required/>
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

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
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