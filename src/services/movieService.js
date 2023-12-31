const API_BASE_URL = 'http://34.88.186.82/movies';
//const API_BASE_URL = 'http://localhost:5001/movies';
let fetch;

if (typeof window === 'undefined') {
  //for testing
  fetch = require('node-fetch');
} else {
  fetch = window.fetch;
}

export const searchMovies = async (query ,page) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search?query=${query}&page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/details/${movieId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieList = async (type ,page) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${type}?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/trending/today`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovies = async (movieIds) => {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids: movieIds }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
