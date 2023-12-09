import React from 'react';
import './Review.js.css';

const Review = ({ review, username, onDelete }) => {
    const handleDelete = async () => {
      try {
        onDelete(review._id);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <h3>{review.username}</h3>
        <p>{review.content}</p>
        {review.username === username && (
          <button onClick={handleDelete}>Delete</button>
        )}
      </div>
    );
  };

  export default Review;