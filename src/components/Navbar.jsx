import React from 'react';
import './Navbar.css';
import logo from '../assets/blue1.png'; // Assuming logo is named logo.png and is in src/assets

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="BLUE TISI Company Logo" className="logo-img" />
      </div>
      <div className="navbar-button">
        <button className="credit-card-button">Get Your Credit Card</button>
      </div>
    </nav>
  );
}

export default Navbar; 