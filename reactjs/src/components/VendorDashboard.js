import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';
import './styles.css';

export default function VendorDashboard() {
    
    const {token,logout} = AuthUser();
    const {http} = AuthUser();
    const [userdetail,setUserdetail] = useState('');

    const logoutUser = () => {
            logout();
        }

    const fetchUserDetail = () =>{
        http.post('/me').then((res)=>{
            setUserdetail(res.data);
        });
    }

    useEffect(() => {
        if (token !== undefined) {
            fetchUserDetail();
          }
      }, []);

    return(
        <div className='d-flex'>
            <div className="col-sm-3 p-5">
                <div className="perfil card p-4 shadow style={{maxHeight: '800px', minHeight: '440px'}}">
                    <h1 className="text-center">Perfil Proveedor</h1>

                    <div className="form-group mt-3">
                        <h4>Nombre</h4>
                        <p>{userdetail.name}</p>
                    </div>

                    <div className="form-group mt-3">
                        <h4>Correo electrónico</h4>
                        <p>{userdetail.email}</p>
                    </div>

                    <div className="form-group mt-3">
                        <h4>Número telefónico</h4>
                        <p>{userdetail.phone}</p>
                    </div>

                    <button className="btn btn-danger mt-3" onClick={logoutUser}>Cerrar sesión</button>

                </div>
            </div>
            <div className="col-sm-8 p-5">
                <div className="contrats card p-4 shadow" style={{maxHeight: '800px', minHeight: '440px'}}>

                    <h1 className="text-center">Contratos</h1>

                    <div style={{overflowY: 'auto'}}>

                        <div className="form-group mt-3">
                            <h4>Nombre</h4>
                            <p>{userdetail.name}</p>
                        </div>

                        <div className="form-group mt-3">
                            <h4>Correo electrónico</h4>
                            <p>{userdetail.email}</p>
                        </div>

                        <div className="form-group mt-3">
                            <h4>Número telefónico</h4>
                            <p>{userdetail.phone}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}