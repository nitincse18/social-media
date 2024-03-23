const BASE_URL = 'https://social-media-api-production-6a0e.up.railway.app';

const api = (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        if(response.status === 401) {
          throw new Error(`Invalid Credentials😔`);
        }
        
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
};
export default api;


