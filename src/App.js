import React, { useState } from 'react';
import WelcomeScreen from './Components/WelcomeScreen';
import Question from './Components/Question';
import ConfirmationDialog from './Components/ConfirmationDialog';
import ThankYouScreen from './Components/ThankYouScreen';
import { saveAnswer, saveSurveyStatus } from './utils/localStorage';

const questions = [
  { id: 1, text: "How satisfied are you with our products?", type: "rating", scale: 5 },
  { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
  { id: 3, text: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
  { id: 4, text: "On a scale of 1-10, how would you recommend us to your friends and family?", type: "rating", scale: 10 },
  { id: 5, text: "What could we do to improve our service?", type: "text" }
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  const startSurvey = () => {
    setCurrentQuestionIndex(0);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowConfirmation(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
    saveAnswer(questionId, answer);
  };

  const handleSubmit = () => {
    saveSurveyStatus('COMPLETED');
    setSurveyCompleted(true);
    setShowConfirmation(false);
  };

  const handleRedirectToWelcome = () => {
    setSurveyCompleted(false);
    setCurrentQuestionIndex(null);
  };

  return (
    <div className="App">
      {surveyCompleted ? (
        <ThankYouScreen onRedirect={handleRedirectToWelcome} />
      ) : showConfirmation ? (
        <ConfirmationDialog
          onSubmit={handleSubmit}
          onCancel={() => setShowConfirmation(false)}
        />
      ) : currentQuestionIndex === null ? (
        <WelcomeScreen onStart={startSurvey} />
      ) : (
        <Question
          question={questions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onNext={goToNextQuestion}
          onPrevious={goToPreviousQuestion}
          onAnswer={handleAnswer}
          answer={answers[questions[currentQuestionIndex].id]}
        />
      )}
    </div>
  );
}

export default App;
