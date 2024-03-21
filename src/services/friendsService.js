import api from './api';

export const getRecommendedFriends = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('token'))
      const response = await api(`/user/user_list/not_friend`, {
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

  export const getFriendsList = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('token'))
      const response = await api(`/user/my_friends/list`, {
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

  export const receivedRequests = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('token'))
      const response = await api(`/user/received-requests/list`, {
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

  export const sentRequests = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('token'))
      const response = await api(`/user/sent-requests/list`, {
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

  export const sendFriendRequest = async (data) => {
    try {
      const user = JSON.parse(localStorage.getItem('token'))
      const response = await api('/user/friend-request/'+data.receiverId, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer '+ String(user?.token)
        },
        body: JSON.stringify(data),
      });
  
      return response;
    } catch (error) {
      throw error;
    }

    
    
  };

  export const unfriend = async (data) => {
    try {
      const user = JSON.parse(localStorage.getItem('token'))
      const response = await api('/user/unfriend/'+data.id, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer '+ String(user?.token)
        },
        body: JSON.stringify(data),
      });
  
      return response;
    } catch (error) {
      throw error;
    }
  }


  export const deleteSentRequest = async (data) => {
    try {
      const user = JSON.parse(localStorage.getItem('token'))
      const response = await api('/user/sent-requests/'+data.id, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer '+ String(user?.token)
        },
        // body: JSON.stringify(data),
      });
  
      return response;
    } catch (error) {
      throw error;
    }
  }

  export const acceptFriendRequest = async (data) => {
    try {
      const user = JSON.parse(localStorage.getItem('token'))
      const response = await api('/user/accept_request/'+data.id, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer '+ String(user?.token)
        },
        // body: JSON.stringify(data),
      });
  
      return response;
    } catch (error) {
      throw error;
    }
  }