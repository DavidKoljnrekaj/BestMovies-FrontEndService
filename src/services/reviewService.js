//const API_BASE_URL = 'http://34.88.83.207/review';
const API_BASE_URL = 'http://localhost:5002/review';
import { getToken } from './userService';

export const addReview = async (movieId, content, rating) => {
  const token = getToken();
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ movieId, content, rating }),
  });
  if (!response.ok) {
    throw new Error('Failed to add review');
  }
  const data = await response.json();
  return data.message;
};

export const getReviews = async (movieId) => {
  const response = await fetch(`${BASE_URL}/${movieId}`);
  if (!response.ok) {
    throw new Error('Failed to get reviews');
  }
  const data = await response.json();
  return data.reviews;
};

export const deleteReview = async (movieId) => {
  const token = getToken();
  const response = await fetch(`${BASE_URL}/${movieId}`, {
    method: 'DELETE',
    headers: {
       Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to delete review');
  }
  const data = await response.json();
  return data.message;
};