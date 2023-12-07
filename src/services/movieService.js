const API_BASE_URL = /*'http://34.88.186.82/movies';*/ 'http://localhost:5001/movies';
let fetch;

if (typeof window === 'undefined') {
  //for testing
  fetch = require('node-fetch');
} else {
  fetch = window.fetch;
}

export const searchMovies = async (query /*,page,adult*/) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search?query=${query}&adult=true&page=1`);
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

export const getMovieList = async (type/* ,page*/) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${type}?page=1`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/trending/today`);
    console.log(response);
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

export const getMovieCast = async (movieId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cast/${movieId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDirectors = async (movieId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cast/${movieId}/directors`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getActorDetails = async (actorId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cast/${actorId}/details`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getActorMovies = async (actorId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cast/${actorId}/movies`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};