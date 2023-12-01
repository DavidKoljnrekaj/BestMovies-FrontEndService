const API_BASE_URL = 'http://34.88.186.82/movies';

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search?query=${query}`);
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
