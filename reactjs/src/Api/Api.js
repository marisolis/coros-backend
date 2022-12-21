export const searchPaquete = async (paquete) => {
  try {
    let url = `http://127.0.0.1:8000/api/v1/paquetes/${paquete}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getPaquetes = async (limit = 50, offset = 0) => {
  try {
    let url = `http://127.0.0.1:8000/api/v1/paquetes/?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getPaquetesData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};
