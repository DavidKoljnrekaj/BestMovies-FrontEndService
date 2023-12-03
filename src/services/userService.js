const API_BASE_URL = 'http://34.88.83.207/user'; 

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
      //const value = localStorage.getItem('myKey');localStorage.removeItem('myKey');localStorage.clear();
    }
    return data;
  } catch (error) {
    throw error;
  }
};
