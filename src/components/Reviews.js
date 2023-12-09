import React, { useEffect, useState } from 'react';
import Review from './Review';
import * as reviewService from '../services/reviewService';
import './Reviews.js.css';

const Reviews = ({ movieId, username }) => {
  const [reviews, setReviews] = useState([]);
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

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
      await reviewService.addReview(movieId, content, rating, username);
      setContent('');
      setRating('');
      const reviews = await reviewService.getReviews(movieId);
      setReviews(reviews);
      toggleForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await reviewService.deleteReview(movieId);
      const reviews = await reviewService.getReviews(movieId);
      setReviews(reviews);
    } catch (error) {
      console.error(error);
    }
  };

  const userHasReviewed = reviews.some(review => review.username === username);

  const toggleForm =() => {
    if (username === "") {
      alert("Please log in to post reviews.");}
      else if(userHasReviewed)
      {
        alert("You have already reviewed this movie.");
      }
     else {
      setIsFormOpen(!isFormOpen);
    }
  }

  return (
    <div className='reviews'> 
  <div className='reviews-header'>
    <h1 className='reviews-title'>User Reviews:</h1>
    <button onClick={toggleForm}>
      {isFormOpen ? "Close" : "Add a review"}
    </button>
  </div>
  <div className='reviews-container'>
  {isFormOpen && username !== "" && (
      <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>
                Add a review:
              </label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>
                Rating:
              </label>
              <input
                type="number"
                min="0.5"
                max="5"
                step="0.5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
      )}
      {reviews.length === 0 ? (
    <p>There are no reviews, be the first to review!</p>
      ) : (
        reviews.map(review => (
          <Review key={review._id} review={review} username={username} onDelete={handleDelete} />
        ))
      )}
    </div>
    </div>
  );
};

export default Reviews;