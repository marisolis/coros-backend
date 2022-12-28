import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../components/dashboard";
import VendorDashboard from "../components/VendorDashboard";
import AuthUser from "../components/AuthUser";
import Paquete from "../Pages/VerMasPaquete";
import Proveedor from "../Pages/VerMasProveedor";

function AuthVendor() {
  const { token, logout } = AuthUser();

  const logoutUser = () => {
    if (token !== undefined) {
      logout();
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow px-0 py-2">
        <div className="container px-0 mx-5 mw-100">
          <a className="navbar-brand" href="#">
            Brand
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vendordashboard">
                  Perfil
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendordashboard" element={<VendorDashboard />} />
          <Route path="/paquete/:id" element={<Paquete />} />
          <Route path="/proveedor/:id" element={<Proveedor />} />
        </Routes>
      </div>
    </>
  );
}

export default AuthVendor;
