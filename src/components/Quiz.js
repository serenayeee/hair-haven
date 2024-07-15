import React from 'react';
import Header from './Header';
import './Quiz.css';

const Quiz = ({ navigateTo }) => {
  const handleConcernsClick = () => {
    navigateTo('shop-by-concern'); // Navigate to the shop by concern page
  };

  return (
    <div>
      <Header navigateTo={navigateTo} />
      <div className="quiz-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/quiz.png)` }}>
        {/* Your quiz content goes here */}
        <button className="concerns-button" onClick={handleConcernsClick}>CLICK FOR CONCERNS</button>
      </div>
    </div>
  );
};

export default Quiz;
