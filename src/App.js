import React from 'react';
import './App.css';
import './components/flashcard.css'
import Flashcard from './components/Flashcard'; 
import Navbar from './components/navbar';

const App = () => {

  const flashcards = [
    { question: 'A light rope is wound around a hollow cylinder of mass 5 kg and radius 70 cm. The rope is pulled with a force of 52.5 N. The angular acceleration of the cylinder will be _________ rad s-2.', answer: '15' },
    { question: 'For a rolling spherical shell, the ratio of rotational kinetic energy and total kinetic energy is x. The value of x/5 is?', answer: '2' },
    { question: 'The number of integral values of m, for which the x-co-ordinate of the point of intersection of the lines 3x+4y=9 and y=mx+1 is also an integer is', answer: '2' },
    { question: 'A ray of light coming from the point (1, 2) is reflected at a point A on the x–axis and then passes through the point (5, 3). The coordinates of the point A are (x, y). Find 5x + y.', answer: '13' },
    
  ];

  return (
    <div className="app">
      <Navbar />

      {/* <h1 className='text-center '>Learn for JEE using Flashcards!!</h1> */}
      
      <div className="flashcard-container flex">
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
