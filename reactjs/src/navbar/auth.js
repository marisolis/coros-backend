import { Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/AuthUser';
import Contrats from '../components/contrats';
function Auth() {

    const {token,logout} = AuthUser();

    const logoutUser = () => {
        if(token !== undefined){
            logout();
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow px-0 py-2">
            <div className="container px-0 mx-5 mw-100">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/contrats">Contratos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/dashboard">Perfil</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/contrats" element={<Contrats />} />
                </Routes>
            </div>
        </>
    );
}

export default Auth;
