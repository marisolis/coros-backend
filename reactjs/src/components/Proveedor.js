import "../assets/style/styles.css";
import { useParams } from "react-router-dom";

const Proveedor = () => {
  const params = useParams();

  return <div>Proveedor con el id {params.id}</div>;
};

export default Proveedor;
