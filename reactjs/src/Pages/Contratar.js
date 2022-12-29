import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from '../components/AuthUser';

var name;
var email;
var phone;
var idCliente;

function MyVerticallyCenteredModal(props) {

  const {http,setToken} = AuthUser();
  const [event,setEvent] = useState();

  const [IDClient,setIDClient] = useState(null);
  const [nameC,setName] = useState(null);
  const [emailC,setEmail] = useState(null);
  const [phoneC,setPhone] = useState(null);
  const [evento,setEvento] = useState(null);
  const [lugar,setLugar] = useState(null);
  const [fecha,setFecha] = useState(null);
  const [hora,setHora] = useState(null);
  const [formaPago,setFormaPago] = useState(null);
  const [IDPaquete,setIDPaquete] = useState(null);
  const [namePaquete,setNamePaquete] = useState(null);
  
  useEffect( () => {
    var tokenUser = sessionStorage.getItem('token');
    if (tokenUser != null) {
      http.post('/me').then((res)=>{
        idCliente = res.data.id;
        name = res.data.name;
        email = res.data.email;
        phone = res.data.phone;
        setIDClient(idCliente);
        setName(name);
        setEmail(email);
        setPhone(phone);
        setIDPaquete(localStorage.getItem('idPaquete'));
        setNamePaquete(localStorage.getItem('namePaquete'));
      });
    }
  }, []);

  function enviarContrato() {
    http.post('http://127.0.0.1:8000/api/v1/contratacion',{id_paquete:IDPaquete,nombre_paquete:namePaquete,id_cliente:IDClient,nombre_cliente:nameC, Tipo_evento:evento,Forma_de_pago:formaPago,Fecha:fecha,Hora:hora,Lugar:lugar,fecha_apartado:'2023-12-23',correo:'203453@ids.upchiapas.edu.mx'}).then((res)=>{
      console.log(res.data.data);
    }).catch((error) => {
        console.log(error.response.data);
    })
  }

  const submitForm = (e) =>{
    e.preventDefault();
    if (name != null && email != null && phone != null && evento != null && lugar != null && fecha != null && hora != null) {
        console.log(nameC);
        console.log(emailC);
        console.log(phoneC);
        console.log(evento);
        console.log(lugar);
        console.log(fecha);
        console.log(hora);
        console.log(IDPaquete);
        console.log(namePaquete);
        console.log(formaPago);

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

                    <div className="form-group mt-3">
                        <label className="form-label">Hora*</label>
                        <input type="time" className="form-control" placeholder="Hora"
                            onChange={e=>setHora(e.target.value)}
                        id="event" required/>
                    </div>

                    <div className="form-group mt-3">
                        <label className="form-label">Forma de pago*</label>
                        <select className='form-control' onChange={e=>setFormaPago(e.target.value)} defaultValue='1'>
                          <option>Seleccione una opción...</option>
                          <option>Debito</option>
                          <option>Efectivo</option>
                        </select>
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