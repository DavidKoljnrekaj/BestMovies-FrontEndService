import React, { useEffect, useState } from 'react';
import Review from './Review';
import * as reviewService from '../services/reviewService';
import './Reviews.js.css';

const Reviews = ({ movieId, username }) => {
  const [reviews, setReviews] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await reviewService.getReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await reviewService.addReview(movieId, content, username);
      setContent('');
      const reviews = await reviewService.getReviews(movieId);
      setReviews(reviews);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (reviewId) => {
    try {
      await reviewService.deleteReview(reviewId);
      const reviews = await reviewService.getReviews(movieId);
      setReviews(reviews);
    } catch (error) {
      console.error(error);
    }
  };

  const userHasReviewed = reviews.some(review => review.username === username);

  return (
    <div>
      {username && !userHasReviewed && (
        <form onSubmit={handleSubmit}>
          <label>
            Add a review:
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <label>
            Rating:
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      {reviews.map(review => (
        <Review key={review._id} review={review} username={username} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Reviews;