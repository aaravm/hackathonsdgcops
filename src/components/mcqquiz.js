import React, { useState } from 'react';


const MCQComponent = ({ question, options, answer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  return (
    <div className="mcq">
      <div className="mcq-question">{question}</div>
      <ul className="mcq-options">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option)}
            className={selectedAnswer === option ? (option === answer ? 'correct' : 'incorrect') : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MCQComponent;
