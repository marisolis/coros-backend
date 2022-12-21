import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { proveedorUnico } from "../Helpers/Proveedor";

function VerMas() {
  const [proveedor, setproveedor] = useState(null);
  const params = useParams();

  useEffect(() => {
    proveedorUnico(params.id, setproveedor);
  }, []);

  return (
    <div>
      {proveedor != null ? (
        <div>
          <h2>ID: {proveedor.id}</h2>
          <h2>Name: {proveedor.name}</h2>
        </div>
      ) : (
        "No hay proveedores"
      )}
    </div>
  );
}

export default VerMas;
