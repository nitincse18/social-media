import api from './api';

export const createPost = async (postData, file) => {
  try {
    console.log('postData', JSON.stringify(postData.entries()), file)
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await api('/posts', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer '+ String(user?.token)
      },
      body: postData,
    });

    return response;
  } catch (error) {
    throw error;
  }
};


export const postList = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await api('/posts?page=1&take=20', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ String(user?.token)
      },
      // body: postData,
    });

    return response;
  } catch (error) {
    throw error;
  }
  
};

export const createComment = async (commentBody) => {
  try {
    console.log(commentBody)
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await api('/posts/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ String(user?.token)
      },
      body: JSON.stringify(commentBody),
    });

    return response;
  } catch (error) {
    throw error;
  }
};
