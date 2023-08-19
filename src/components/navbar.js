import React from 'react';
import './navbar.css'; // Import the corresponding CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Learn For JEE in an Interactive way! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="#"> Flashcards </a> &nbsp; &nbsp;  <a href="#"> MCQ's </a> </div>
      {/* <div className="navbar-brand">Flashcards  &nbsp; &nbsp;  MCQ's  </div> */}
      <div className="navbar-brand"></div>
    </nav>
  );
};

export default Navbar;
