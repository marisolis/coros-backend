import "../assets/style/home.css";
import HeroImage from "../components/HeroImage";
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import Filtrar from "../components/Filtrar";
import { proveedoresLista } from "../Helpers/Proveedor";

function Home() {
  
  const [proveedores, setproveedores] = useState(null);

  useEffect(() => {
    proveedoresLista(setproveedores);

    if (localStorage.getItem('vendorEmail')){
      localStorage.removeItem('vendorEmail');
      localStorage.removeItem('vendorID');
    }
  
    if (localStorage.getItem('idPaquete')){
      localStorage.removeItem('idPaquete');
      localStorage.removeItem('namePaquete');
    }
  }, []);

  return (
    <div className="container">
      <div className="container-fluid mw-100 m-0 p-0">{<HeroImage />}</div>
      {<Filtrar />}
      <div className="lista-personajes cards justify-content-between">
        {proveedores != null
          ? proveedores.map((proveedor) => (
              <Card key={proveedor.id} proveedor={proveedor} />
            ))
          : "No hay proveedores"}
      </div>
    </div>
  );
}

export default Home;
