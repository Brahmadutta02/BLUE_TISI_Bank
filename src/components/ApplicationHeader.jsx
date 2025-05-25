import React from 'react';
import './ApplicationHeader.css';
import logo from '../assets/blue1.png'; // Assuming the logo is here

function ApplicationHeader() {
  return (
    <div className="application-header-container">
      <div className="header-top-bar">
        <div className="header-logo">
          <img src={logo} alt="BLUE TISI Company Logo" className="header-logo-img" />
        </div>
        <button className="header-credit-card-button">Get Your Credit Card</button>
      </div>
      <div className="header-title-area">
        <h1>Apply Now For Your <br/> Credit Card</h1>
      </div>
    </div>
  );
}

export default ApplicationHeader; 