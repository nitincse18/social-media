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


export const getUserPhotos = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await api(`/posts/media?media_type=image`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ String(user?.token)
      },
    //   body: JSON.stringify(userData),
    });
    const photos = response.map(item => item.mediaUrl)
    return photos;
  } catch (error) {
    throw error;
  }
};

export const getUserVideos = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await api(`/posts/media?media_type=video`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ String(user?.token)
      },
    //   body: JSON.stringify(userData),
    });
    const photos = response.map(item => item.mediaUrl)
    return photos;
  } catch (error) {
    throw error;
  }
};

export const updatePP = async (formData) => {
  console.log('formData', formData)
  try {
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await api(`/user/update_profile/image`, {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ String(user?.token)
      },
      body: formData,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export const updateUserProfile = async (userData) => {

  try {
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await api(`/user/update/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ String(user?.token)
      },
      body: JSON.stringify(userData),
    });
    return response;
  } catch (error) {
    throw error;
  }
}