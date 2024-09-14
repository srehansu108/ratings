import React from 'react';
import './Welcome.css';
const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Our Survey</h1>
      <button onClick={onStart}>Start Survey</button>
    </div>
  );
};

export default WelcomeScreen;
