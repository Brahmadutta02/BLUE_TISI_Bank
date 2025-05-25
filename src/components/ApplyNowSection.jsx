import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ApplyNowSection.css';

function ApplyNowSection() {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/apply');
  };

  return (
    <section className="apply-now-section">
      <div className="container">
        <p className="apply-subtitle">Get your finances protected in minutes</p>
        <h2 className="apply-title">Apply Now For Your <br/> Credit Card</h2>
        <button className="apply-now-button" onClick={handleApplyClick}>
          <i className="fas fa-bolt"></i> Apply Now
        </button>
      </div>
    </section>
  );
}

export default ApplyNowSection; 