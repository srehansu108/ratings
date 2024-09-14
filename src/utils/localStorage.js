export const saveAnswer = (questionId, answer) => {
    const storedAnswers = JSON.parse(localStorage.getItem('surveyAnswers')) || {};
    storedAnswers[questionId] = answer;
    localStorage.setItem('surveyAnswers', JSON.stringify(storedAnswers));
  };
  
  export const saveSurveyStatus = (status) => {
    localStorage.setItem('surveyStatus', status);
  };
  