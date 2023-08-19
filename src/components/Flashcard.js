import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flashcard flex-auto" onClick={toggleAnswer}>
      <div className={`flashcard-inner ${showAnswer ? 'flipped' : ''}`}>
        <div className="flashcard-front">{question}</div>
        <div className="flashcard-back">{answer}</div>
      </div>
    </div>
  );
};

export default Flashcard;
