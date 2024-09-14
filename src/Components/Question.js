import React from 'react';
import './Question.css';
import StarRating from './StarRating'; // Import the StarRating component

const Question = ({ question, currentIndex, totalQuestions, onNext, onPrevious, onAnswer, answer }) => {
  const handleStarRatingChange = (rating) => {
    onAnswer(question.id, rating);
  };

  return (
    <div className="question-screen">
      <h2>Question {currentIndex + 1}/{totalQuestions}</h2>
      <p>{question.text}</p>
      {question.type === "rating" ? (
        <StarRating
          maxRating={question.scale}
          currentRating={answer || 0}
          onRatingChange={handleStarRatingChange}
        />
      ) : (
        <textarea value={answer || ''} onChange={(e) => onAnswer(question.id, e.target.value)} />
      )}
      <div className="navigation-buttons">
        <button onClick={onPrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default Question;
