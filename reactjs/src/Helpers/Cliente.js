import axios from "axios";

const proveedorUnicoContratos = async (id, state) => {
  const response = await axios.get(
    `http://localhost:8000/api/v1/usuario/${id}?includeContratos=true`
  );
  state(response.data.data.contrataciones);
};

export { proveedorUnicoContratos };
