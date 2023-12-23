const BASE_URL = 'http://localhost:4000';

const api = (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
};

export default api;