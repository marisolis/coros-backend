import "../assets/style/home.css";
import HeroImage from "../components/HeroImage";
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import Filtrar from "../components/Filtrar";

function Home() {
  const [paquetes, setPaquetes] = useState(null);

  useEffect(() => {
    const getPersonajes = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/v1/paquetes/");
        const data = await response.json();
        setPaquetes(data);
        console.log(paquetes);
      } catch (error) {
        console.log(error);
      }
    };
    getPersonajes();
  }, []);
  return (
    <div className="container">
      <div className="container-fluid mw-100 m-0 p-0">{<HeroImage />}</div>
      {<Filtrar />}
      <section className="lista-personajes">
        {paquetes != null
          ? paquetes.map((paquete) => (
              <Card key={paquete.id} paquete={paquete} />
            ))
          : "No hay paquetes"}
      </section>
    </div>
  );
}

export default Home;
