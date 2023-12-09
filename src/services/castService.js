const API_BASE_URL = 'http://34.88.186.82/movies/cast';
//const API_BASE_URL = 'http://localhost:5001/movies/cast';
let fetch;

if (typeof window === 'undefined') {
  fetch = require('node-fetch');
} else {
  fetch = window.fetch;
}


export const getMovieCast = async (movieId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${movieId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getMovieDirectors = async (movieId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${movieId}/directors`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getActorDetails = async (actorId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${actorId}/details`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getActorMovies = async (actorId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${actorId}/movies`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  export const getActorStatistics = async (actorId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${actorId}/statistics`);
      const statistics = await response.json();
      return statistics;
    } catch (error) {
      console.error(error);
    }
  };