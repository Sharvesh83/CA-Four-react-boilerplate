import React from 'react';
import '../styles/Result.css'

const Result = ({ score, totalQuestions, restartGame }) => {
  const percentage = ((score / 5) * 100).toFixed(2);

  return (
    <div className="result-box">
      <div className="result-header">Final Results</div>
      <div className="result-summary">
        {score} out of 5 correct - ({percentage}%)
      </div>
      <button className="restart-button" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
};

export default Result;
