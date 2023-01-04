import axios from "axios";

const paquetesLista = async (state) => {
  const response = await axios.get("http://127.0.0.1:8000/api/v1/paquetes/");
  state(response.data);
};

const paqueteUnico = async (id, state) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/v1/paquetes/${id}`
  );
  localStorage.setItem('idPaquete',response.data.data.id);
  localStorage.setItem('namePaquete',response.data.data.name);
  state(response.data.data);
};

export { paquetesLista, paqueteUnico };
