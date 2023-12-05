const API_BASE_URL = /*'http://34.88.83.207/user';*/ 'http://localhost:5002/user'; 
let token = '';

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
      token = data.token;
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const getWatchlist = async () => {
  try {
    console.log(token);
    const response = await fetch(`${API_BASE_URL}/watchlist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data.watchlist;
  } catch (error) {
    throw error;
  }
};

export const addToWatchlist = async (movieId) => {
  console.log(movieId);
  try {
    const response = await fetch(`${API_BASE_URL}/watchlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ movieId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const removeFromWatchlist = async (movieId) => {
  try {
    const response = await fetch(`${API_BASE_URL}watchlist/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ movieId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

