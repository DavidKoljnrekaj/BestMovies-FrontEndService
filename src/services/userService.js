const API_BASE_URL = 'http://34.88.83.207/user'; //'http://localhost:5002/user'; 

export const signup = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token); 
      console.log(data.token);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const getFavourites = async (username) => {
  /*try {
    const response = await fetch(`${API_BASE_URL}/profile/${username}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const data = await response.json();
    return data.favorites;
  } catch (error) {
    throw error;
  }*/
  return null;
}

