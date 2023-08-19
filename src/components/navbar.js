import React from 'react';
import './navbar.css'; // Import the corresponding CSS file

const Navbar = ({ flash, mc }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Learn For JEE in an Interactive way! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <a href={flash}>Flashcards</a> &nbsp; &nbsp; <a href={mc}>MCQ's</a>
      </div>
      <div className="navbar-brand"></div>
    </nav>
  );
};

export default Navbar;
