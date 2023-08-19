import React from 'react';
import './App.css';
import './components/flashcard.css'
import Flashcard from './components/Flashcard';

const App = () => {
  const flashcards = [
    { question: 'A light rope is wound around a hollow cylinder of mass 5 kg and radius 70 cm. The rope is pulled with a force of 52.5 N. The angular acceleration of the cylinder will be _________ rad s-2.', answer: '15' },
    { question: 'For a rolling spherical shell, the ratio of rotational kinetic energy and total kinetic energy is x. The value of x/5 is?', answer: '2' },
    { question: 'For a rolling spherical shell, the ratio of rotational kinetic energy and total kinetic energy is x. The value of x/5 is?', answer: '2' },
    { question: 'For a rolling spherical shell, the ratio of rotational kinetic energy and total kinetic energy is x. The value of x/5 is?', answer: '2' },
    
  ];

  return (
    <div className="app">
      <h1 className='text-center'>Learn for JEE using Flashcards!!</h1>
      
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
