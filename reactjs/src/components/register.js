import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function Register() {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/register',{email:email,password:password,name:name}).then((res)=>{
            navigate('/login')
        })
    }

    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Registrarse </h1>
                    <div className="form-group">
                        <label>Nombre completo:</label>
                        <input type="test" className="form-control" placeholder="Nombre completo"
                            onChange={e=>setName(e.target.value)}
                        id="email" required/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Correo electrónico:</label>
                        <input type="email" className="form-control" placeholder="Email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" required/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Contraseña:</label>
                        <input type="password" className="form-control" placeholder="Contraseña"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" required/>
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Crear cuenta</button>
                </div>
            </div>
        </div>
    )
}