import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';

export default function Dashboard() {
    const {http} = AuthUser();
    const [userdetail,setUserdetail] = useState('');

    useEffect(()=>{
        fetchUserDetail();
    },[]);

    const fetchUserDetail = () =>{
        http.post('/me').then((res)=>{
            setUserdetail(res.data);
        });
    }

    const {token,logout} = AuthUser();

    const logoutUser = () => {
            logout();
        }

    return(
        <div className="col-sm-3 p-5">
            <div className="card p-4">
                <h1 className="text-center">Perfil</h1>

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
        
    )
}