import React from 'react';
import './App.css';
import './components/flashcard.css'
import Flashcard from './components/Flashcard';

const App = () => {
  const flashcards = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is 2 + 2?', answer: '4' },
    
  ];

  return (
    <div className="app">
      <h1>Flashcards Website</h1>
      <div className="flashcard-container">
        {flashcards.map((flashcard, index) => (
          <Flashcard
            key={index}
            question={flashcard.question}
            answer={flashcard.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
