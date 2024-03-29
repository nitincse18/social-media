import api from './api';


export const sendMessageApi = async (messasge) => {
    try {
      
      const user = JSON.parse(localStorage.getItem('token'))
      const response = await api('/messages/send', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer '+ String(user?.token),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messasge),
      });
  
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getMessagesApi = async (messasge) => {
    try {
      
      const user = JSON.parse(localStorage.getItem('token'))
      const response = await api('/messages/get', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer '+ String(user?.token),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messasge),
      });
  
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getConversationListApi = async () => {
    try {
      
      const user = JSON.parse(localStorage.getItem('token'))
      const response = await api('/messages/conversation-list', {
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