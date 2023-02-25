import { useEffect, useState } from 'react';
import { clienteUnicoContratos } from '../Helpers/Cliente';
import AuthUser from './AuthUser';
import './styles.css';
import axios from "axios";

export default function Dashboard() {

    const [cliente, setCliente] = useState(null);
    
    const {token,logout} = AuthUser();
    const {http} = AuthUser();
    const [userdetail,setUserdetail] = useState('');

    const [idContrato, setIdContrato] = useState(null);

    const[statusContrato, SetStatusContrato] =  useState(null);

    const logoutUser = () => {
            logout();
        }

    const fetchUserDetail = () =>{
        http.post('/me').then((res)=>{
            setUserdetail(res.data);
            console.log(userdetail)
            clienteUnicoContratos(res.data.id, setCliente);
            console.log(cliente);
        });
    }

    const peticionPutStatus = () => {
        setIdContrato(3);
        http.put(`http://127.0.0.1:8000/api/v1/contratacion/${idContrato}`, {status: 'Cancelado por cliente'} ).then((res)=>
        {
            console.log(res.data);
            window.location.reload();
        }).catch((error) => {
            console.log(error.response);
            }
        )
    }

    const peticionDeleteContrato= () => {
http.delete(`http://127.0.0.1:8000/api/v1/contratacion/2`).then((res)=>
        {
            console.log(res.data);
            window.location.reload();
        }).catch((error) => {
            console.log(error.response);
            }
        )
    }

    useEffect(() => {
        if (token !== undefined) {
            fetchUserDetail();
          }
      }, []);

    return(
        <div className='d-flex dashboard'>
            <div className="col-sm-3 p-5 perfil-container">
                <div className="perfil card p-4 shadow" style={{maxHeight: '800px', minHeight: '440px'}}>
                    <h2 className="text-center">Perfil</h2>

                    <div className="form-group mt-3">
                        <h5>Nombre</h5>
                        <p>{userdetail.name}</p>
                    </div>

                    <div className="form-group mt-3">
                        <h5>Correo electrónico</h5>
                        <p>{userdetail.email}</p>
                    </div>

                    <div className="form-group mt-3">
                        <h5>Número telefónico</h5>
                        <p>{userdetail.phone}</p>
                    </div>

                    <button className="btn btn-danger mt-3" onClick={logoutUser}>Cerrar sesión</button>

                </div>
            </div>
            <div className="col-sm-8 p-5 contrats-container">
                <div className="contrats card p-4 shadow" style={{maxHeight: '800px', minHeight: '440px'}}>

                    <h2 className="text-center">Contratos</h2>

                    <div style={{overflowY: 'auto'}}>

                        <div className="form-group mt-3 w-100">

                                <table style={{width: '100%'}}>
                                    <thead>
                                        <tr style={{backgroundColor: 'lightgray'}}>
                                            <th className='title-contrat-list p-1' style={{border: '1px solid gray', fontSize: '14px'}}>Paquete ID</th>
                                            <th className='title-contrat-list p-1' style={{border: '1px solid gray', fontSize: '14px'}}>Empresa ID</th>
                                            <th className='title-contrat-list p-1' style={{border: '1px solid gray', fontSize: '14px'}}>Evento</th>
                                            <th className='title-contrat-list p-1' style={{border: '1px solid gray', fontSize: '14px'}}>Forma de pago</th>
                                            <th className='title-contrat-list p-1' style={{border: '1px solid gray', fontSize: '14px'}}>Fecha</th>
                                            <th className='title-contrat-list p-1' style={{border: '1px solid gray', fontSize: '14px'}}>Hora</th>
                                            <th className='title-contrat-list p-1' style={{border: '1px solid gray', fontSize: '14px'}}>Lugar</th>
                                            <th className='title-contrat-list p-1' style={{border: '1px solid gray', fontSize: '14px'}}>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cliente != null
                                        ? cliente.map((contrato) => (
                                        <tr key={contrato.id}>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.nombre_paquete}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.nombre_empresa}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.Tipo_evento}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.Forma_de_pago}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.Fecha}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.Hora}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.Lugar}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.status}</th>
                                            <th>
                                        <button className='btn btn-primary ms-2 me-2 mt-1 mb-1 p-1' style={{ fontSize: '10px', borderRadius: '4px' }} onClick={peticionPutStatus}>Cancelar</button></th><th>
                                        <button className='btn btn-danger ms-2 me-2 mt-1 mb-1 p-1' style={{ fontSize: '10px', borderRadius: '4px' }} onClick={peticionDeleteContrato}>Eliminar</button></th>
                                        </tr>
                                        ))
                                        : "No hay contratos"}
                                    </tbody>
                                </table>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}