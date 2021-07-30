const hostName = 'https://covid-analytics-grupo4.test';

// Pais por fecha
async function getEntriesPorFecha(fecha) {
  return await apiCall('GET', hostName + '/api/entries/porfecha/' + fecha);
};

async function getEntriesPorFechaPais(fecha, pais){
  return await apiCall('GET', hostName + '/api/entries/porfecha/porcountries' + fecha + pais);
};

const apiCall = async (method, url) => {
  let config = {
    method: method,
    url: url,
  }

  const response = await axios(config);

  return response.data;
}

// Exportación de las funciones

export {
  getEntriesPorFecha,
  getEntriesPorFechaPais,
}