import "../assets/style/home.css";
import HeroImage from "../components/HeroImage";
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import Filtrar from "../components/Filtrar";

function Home() {
  const [proveedores, setproveedores] = useState(null);

  useEffect(() => {
    const getProveedores = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/v1/proveedores/"
        );
        const data = await response.json();
        setproveedores(data);
        console.log(proveedores);
      } catch (error) {
        console.log(error);
      }
    };
    getProveedores();
  }, []);
  return (
    <div className="container">
      <div className="container-fluid mw-100 m-0 p-0">{<HeroImage />}</div>
      {<Filtrar />}
      <section className="lista-personajes cards justify-content-between">
        {proveedores != null
          ? proveedores.map((proveedor) => (
              <Card key={proveedor.id} proveedor={proveedor} />
            ))
          : "No hay proveedores"}
      </section>
    </div>
  );
}

export default Home;
