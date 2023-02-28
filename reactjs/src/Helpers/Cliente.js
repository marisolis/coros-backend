import axios from "axios";

const clienteUnicoContratos = async (id, state) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/v1/contratacion/usuario/${id}`
  );
  console.log(response.data);
  state(response.data);
};

export { clienteUnicoContratos };
