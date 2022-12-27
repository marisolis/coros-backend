import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function RegisterVendor() {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [phone,setPhone] = useState();

    const submitForm = (e) =>{
        // api call
        peticionForm();

    }

    const peticionForm = () => {

        http.post('/register',{email:email,password:password,name:name,phone:phone}).then((res)=>{
            navigate('/login')
        })
    }

    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-4">
                <form onSubmit={submitForm} className="card p-4 mb-5 shadow">
                    <h1 className="text-center mb-3">Registrarse (Proveedor)</h1>
            
                    <div className="form-group">
                        <label>Nombre completo*</label>
                        <input type="name" className="form-control" placeholder="Nombre completo"
                            onChange={e=>setName(e.target.value)}
                        id="email" required/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Nombre de proveedor*</label>
                        <input type="name" className="form-control" placeholder="Nombre de proveedor"
                            onChange={e=>setName(e.target.value)}
                        id="email" required/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Descripción de proveedor*</label>
                        <textarea type="name" className="form-control" placeholder="Descripción de proveedor"
                            onChange={e=>setName(e.target.value)}
                        id="email" required/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Imagen de proveedor*</label>
                        <input className="form-control" accept="image/png, image/jpeg" type="file" id="img"/>
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
                            <input type="tel" className="form-control prefixInput" placeholder="Número de teléfono"
                                onChange={e=>setPhone(e.target.value)}
                                id="telphone" required/>
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <label>Contraseña*</label>
                        <input type="password" className="form-control" placeholder="Contraseña"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" required/>
                    </div>

                    <button type="submit" onClick={submitForm} onSubmit={submitForm} className="btn btn-primary mt-4">Crear cuenta</button>
                    <a className="form-link mt-4 text-center" href="/login">¿Ya tienes una cuenta?</a>
                    <a className="form-link mt-2 text-center" href="/register">¿Quieres ser un cliente?</a>
                </form>
            </div>
        </div>
    )
}