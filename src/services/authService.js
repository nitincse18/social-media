// services/authService.js
import api from './api';

export const signup = async (userData) => {
  try {
    const response = await api('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
    
  try {
    const response = await api('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    console.log('response-----',response)
    return response;
  } catch (error) {
    console.log(error)
    throw error;
  }
};

export const logout = async () => {
     
     const user = JSON.parse(localStorage.getItem('token'))
     console.log("user token", user.token) 
    try {
      const response = await api('/auth/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ String(user?.token)
        },
        // body: JSON.stringify(),
      });
      localStorage.clear();
      return response;
    } catch (error) {
      console.log('Error logout', error)
      throw error;
    }
  };
