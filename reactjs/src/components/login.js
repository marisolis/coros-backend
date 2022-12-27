import { useState } from "react";
import AuthUser from "./AuthUser";

export default function Login() {
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = (e) => {
    // api call
    e.preventDefault();
    http.post("/login", { email: email, password: password }).then((res) => {
      setToken(res.data.user, res.data.access_token);
    });
  };

  return (
    <div className="row justify-content-center pt-5 mastheadBg">
      <div className="col-sm-4">
        <form onSubmit={submitForm} className="card p-4 shadow">
          <h1 className="text-center mb-3">Iniciar sesión</h1>
          <div className="form-group">
            <label>Correo electrónico*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña*</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              id="pwd"
            />
          </div>
          <button
            type="submit"
            onClick={submitForm}
            onSubmit={submitForm}
            className="btn btn-primary mt-4"
          >
            Entrar
          </button>
          <a  className="form-link mt-4 text-center" href="/register">
            Crear cuenta
          </a>
        </form>
      </div>
    </div>
  );
}
