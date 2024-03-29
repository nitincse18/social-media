const BASE_URL = 'http://localhost:4000';
const PROD_BASE_URL='https://social-media-api-production-6a0e.up.railway.app';

const api = async (endpoint, options = {}) => {
  const url = `${PROD_BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(`Invalid Credentials😔`);
      }

    }
    return  response?.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export default api;


