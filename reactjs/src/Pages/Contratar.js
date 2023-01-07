import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from '../components/AuthUser';

var name;
var email;
var phone;
var idCliente;
var userType;

function MyVerticallyCenteredModal(props) {

  const navigate = useNavigate();
  const {http,setToken} = AuthUser();

  const [IDClient,setIDClient] = useState(null);
  const [nameC,setName] = useState(null);
  const [emailC,setEmail] = useState(null);
  const [emailV,setEmailVendor] = useState(null);
  const [phoneC,setPhone] = useState(null);
  const [evento,setEvento] = useState(null);
  const [lugar,setLugar] = useState(null);
  const [fecha,setFecha] = useState(null);
  const [hora,setHora] = useState(null);
  const [formaPago,setFormaPago] = useState(null);
  const [IDPaquete,setIDPaquete] = useState(null);
  const [namePaquete,setNamePaquete] = useState(null);
  const [IDVendor,setIDVendor] = useState(null);
  
  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  useEffect( () => {
    var tokenUser = sessionStorage.getItem('token');
    if (tokenUser != null) {
      http.post('/me').then((res)=>{
        idCliente = res.data.id;
        name = res.data.name;
        email = res.data.email;
        phone = res.data.phone;
        userType = res.data.type;
        setIDClient(idCliente);
        setName(name);
        setEmail(email);
        setPhone(phone);
        setIDPaquete(localStorage.getItem('idPaquete'));
        setNamePaquete(localStorage.getItem('namePaquete'));
        setIDVendor(localStorage.getItem('vendorID'));
        setEmailVendor(localStorage.getItem('vendorEmail'));
      });
    }
  }, []);

  function enviarContrato() {
    http.post('http://127.0.0.1:8000/api/v1/contratacion',{paquete_id:IDPaquete,nombre_paquete:namePaquete,usuario_id:IDClient,nombre_cliente:nameC, Tipo_evento:evento,Forma_de_pago:formaPago,Fecha:fecha,Hora:hora,Lugar:lugar,correo:'203453@ids.upchiapas.edu.mx',correo_cliente:emailC,numero_telefono:phoneC,empresa_id:IDVendor}).then((res)=>{
      console.log(res);
    }).catch((error) => {
        console.log(error.response.data);
    })
  }

  const submitForm = async (e) =>{
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
        console.log(emailV);
        document.getElementById('contratButton').disabled = true;
        document.getElementById('loadAnim').style.display = 'inline-flex';
        document.getElementById('loader-line').style.display = 'flex';
        enviarContrato();
        await sleep(4000);
        if (userType === 'client'){
          navigate('/dashboard');
        }else if (userType === 'vendor'){
          navigate('/vendordashboard');
        }else{
          navigate('login');
        }
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

            <Modal id="contratModal"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div id='loader-line' className="loader-line" style={{display: 'none'}}></div>
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
                        <select className='form-select' onChange={e=>setFormaPago(e.target.value)} defaultValue='1'>
                          <option>Seleccione una opción...</option>
                          <option>Tarjeta Débito</option>
                          <option>Tarjeta Crédito</option>
                          <option>Efectivo</option>
                          <option>Paypal</option>
                          <option>Transferencia Bancaria</option>
                        </select>
                    </div>

                </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>Cancelar</Button>
        <Button id='contratButton' variant='primary' onClick={submitForm}><span id='loadAnim' className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{display: 'none'}}></span> Contratar</Button>
      </Modal.Footer>
    </Modal>
    </div>
    
  );
}

function Contratar() {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const openForm = () =>{
    var tokenUser = sessionStorage.getItem('token');
    if (tokenUser != null) {
      setModalShow(true);
    }else{
      navigate('/login');
    }
}

  return (
    <>
      <Button variant="primary btn-contrat" onClick={() => openForm()}>
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