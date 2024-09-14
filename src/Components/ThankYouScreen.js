import React, { useState, useEffect } from 'react';
import './ThankYouScreen.css';

const ThankYouScreen = ({ onRedirect }) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds === 0) {
      onRedirect(); // Call the redirect function when countdown finishes
      return;
    }
    const timer = setInterval(() => setSeconds(prev => prev - 1), 1000);
    return () => clearInterval(timer); // Cleanup on component unmount
  }, [seconds, onRedirect]);

  return (
    <div className="thank-you-screen">
      <h2>Thank You for Your Time!</h2>
      <p>Redirecting you to the welcome screen in {seconds} seconds...</p>
    </div>
  );
};

export default ThankYouScreen;
