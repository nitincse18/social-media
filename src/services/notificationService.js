import api from './api';




export const getNotificationListApi = async () => {
    try {
      
      const user = JSON.parse(localStorage.getItem('token'))
      const response = await api('/notification/my-list', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer '+ String(user?.token),
          // 'Content-Type': 'application/json'
        },
        // body: JSON.stringify(messasge),
      });
  
      return response;
    } catch (error) {
      throw error;
    }
  };
