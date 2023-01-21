import axios from "axios";

const filtrarPaquetes = async (fecha, state) => {
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/fechas/${fecha}`);
    console.log(response.data[0]);
    state(response.data[0]);
};

export {filtrarPaquetes};
