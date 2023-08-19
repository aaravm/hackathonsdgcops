// src/components/MCQComponent.js

import React, { useState } from 'react';

const MCQComponent = ({ question, options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionSelect(option)}
            className={selectedOption === option ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MCQComponent;
