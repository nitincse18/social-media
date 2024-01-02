import api from './api';

export const getUserById = async (id) => {
  try {
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await api(`/user/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ String(user?.token)
      },
    //   body: JSON.stringify(userData),
    });

    return response;
  } catch (error) {
    throw error;
  }
};