import React from 'react';
import './Review.js.css';

const Review = ({ review, username, onDelete }) => {
  const handleDelete = async () => {
    try {
      onDelete();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='review'>
  <div className='review-header'>
    <div>{review.username} says:</div>
    <div>Rating: {review.rating}</div>
  </div>
  <div className='review-content'>
    <div>{review.content}</div>
    {review.username === username && (
      <button onClick={handleDelete}>Delete</button>
    )}
  </div>
</div>
  );
};

export default Review;