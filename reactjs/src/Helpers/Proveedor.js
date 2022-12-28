import axios from "axios";

const proveedoresLista = async (state) => {
  const response = await axios.get("http://127.0.0.1:8000/api/v1/empresas/");
  state(response.data.data);
};

const proveedorUnico = async (id, state) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/v1/empresas/${id}`
  );
  state(response.data.data);
};

const proveedorUnicoPaquetes = async (id, state) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/v1/empresas/${id}?includePaquetes=true`
  );
  state(response.data.data.paquetes);
};

const proveedorUnicoFechas = async (id, state) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/v1/empresas/${id}?includeFechas=true`
  );
  state(response.data.data);
};

export { proveedoresLista, proveedorUnico, proveedorUnicoPaquetes };
