import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/apply');
  };

  return (
    <section className="hero-content">
      <div className="hero-text">
        <h1>Own Your Future. <br/> Get Smartest <br/> Credit Card.</h1>
        <p>Apply in minutes. Earn rewards. Build your credit history</p>
        <button className="apply-button" onClick={handleApplyClick}>
          <i className="fas fa-bolt"></i> Apply Now
        </button>
      </div>
      <div className="hero-images">
        {/* Placeholder for credit card images */}
        <div className="credit-card-placeholder red-card"></div>
        <div className="credit-card-placeholder dark-card"></div>
        <div className="credit-card-placeholder blue-card"></div>
        {/* Placeholder for arrow image */}
        
      </div>
    </section>
  );
}

export default HeroSection; 