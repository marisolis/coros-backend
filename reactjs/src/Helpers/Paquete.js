import axios from "axios";

const paquetesLista = async (state) => {
  const response = await axios.get("http://127.0.0.1:8000/api/v1/paquetes/");
  state(response.data);
};

const paqueteUnico = async (id, state) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/v1/paquetes/${id}`
  );
  console.log(response.data.data);
  state(response.data.data);
};

export { paquetesLista, paqueteUnico };
