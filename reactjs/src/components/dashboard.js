import { useEffect, useState } from 'react';
import { proveedorUnicoContratos } from '../Helpers/Cliente';
import AuthUser from './AuthUser';
import './styles.css';

export default function Dashboard() {

    const [cliente, setCliente] = useState(null);
    
    const {token,logout} = AuthUser();
    const {http} = AuthUser();
    const [userdetail,setUserdetail] = useState('');

    const logoutUser = () => {
            logout();
        }

    const fetchUserDetail = () =>{
        http.post('/me').then((res)=>{
            setUserdetail(res.data);
            proveedorUnicoContratos(res.data.id, setCliente);

        });
    }

    useEffect(() => {
        if (token !== undefined) {
            fetchUserDetail();
          }
      }, []);

    //   if(cliente !== null){

    //     http.get(`http://127.0.0.1:8000/api/v1/paquetes/${cliente.paquete_id}}`).then((res) => {
    //         console.log(res);
    //     }).catch((error) => {
    //         console.log(error.response);
    //     });
    //   }

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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cliente != null
                                        ? cliente.map((contrato) => (
                                        <tr key={contrato.id}>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.paquete_id}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.empresa_id}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.Tipo_evento}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.Forma_de_pago}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.Fecha}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.Hora}</th>
                                            <th className='content-contrat-list p-1' style={{border: '1px solid gray', fontWeight: '500', fontSize: '14px'}}>{contrato.Lugar}</th>
                                            <button className='btn btn-danger ms-2 me-2 mt-1 mb-1 p-1' style={{fontSize: '10px', borderRadius: '4px'}}>Cancelar</button>
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