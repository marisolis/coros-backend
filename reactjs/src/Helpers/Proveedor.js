import axios from "axios";

const proveedoresLista = async (state) => {
  const response = await axios.get("http://127.0.0.1:8000/api/v1/proveedores/");
  state(response.data);
};

const proveedorUnico = async (id, state) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/v1/proveedores/${id}`
  );
  state(response.data.data);
};

export { proveedoresLista, proveedorUnico };
