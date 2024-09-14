import React from 'react';
import './StarRating.css'; // Add styles for your star rating

const StarRating = ({ maxRating, currentRating, onRatingChange }) => {
  const handleClick = (rating) => {
    onRatingChange(rating);
  };

  return (
    <div className="star-rating">
      {Array.from({ length: maxRating }, (_, index) => (
        <span
          key={index}
          className={`star ${currentRating > index ? 'filled' : ''}`}
          onClick={() => handleClick(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
