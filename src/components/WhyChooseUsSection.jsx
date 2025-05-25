import React from 'react';
import './WhyChooseUsSection.css';
import { FaCalendarAlt, FaShoppingCart, FaMoneyBillWave, FaShieldAlt, FaCreditCard, FaGlobe } from 'react-icons/fa';

function WhyChooseUsSection() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="subtitle">WHY CHOOSE US?</div>
        <h2 className="section-title">Making Your Life Easier</h2>
        <div className="features-grid">

          <div className="feature-item feature-item-1">
            <p>30-45 Days Interest-Free Period</p>
            <div className="feature-icon">{/* Icon placeholder */}</div>
          </div>

          <div className="feature-item feature-item-2">
            <p>Accepted Nationwide & Online</p>
            <div className="feature-icon">{/* Icon placeholder */}</div>
          </div>

          <div className="feature-item feature-item-3">
            <p>No Collateral Required</p>
            <div className="feature-icon">{/* Icon placeholder */}</div>
          </div>

          <div className="feature-item feature-item-4">
            <p>Earn Cashback & Airtime Rebates</p>
            <div className="feature-icon">{/* Icon placeholder */}</div>
          </div>

          <div className="feature-item feature-item-5">
            <p>Fraud Protection & Card Controls</p>
            <div className="feature-icon">{/* Icon placeholder */}</div>
          </div>

          <div className="feature-item feature-item-6">
            <p>Up To ₦1,000,000 Limit</p>
            <div className="feature-icon">{/* Icon placeholder */}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection; 