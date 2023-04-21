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

const proveedorUnicoContratos = async (id, state, proveedor) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/v1/contratacion/empresa/${id}`
  );
  if (response.data.length === 0) {
    state(null);
    proveedor(id);
  } else {
    state(response.data);
    proveedor(id);
  }
  
};

const emailProveedor = async (email, state, proveedor) => {
  const response = await axios.get(
      `http://127.0.0.1:8000/api/v1/findByEmail/${email}`
  );
  console.log(response.data[0]);
  proveedorUnicoContratos(response.data[0].id, state, proveedor)
}

export { proveedoresLista, proveedorUnico, proveedorUnicoPaquetes, proveedorUnicoContratos, emailProveedor };
