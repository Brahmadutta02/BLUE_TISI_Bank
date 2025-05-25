import React from 'react';
import './RequirementsSection.css';

function RequirementsSection() {
  return (
    <section className="requirements-section">
      <div className="container">
        <h2 className="requirements-title">To apply, you'll need</h2>
        
        <div className="requirements-grid">
          <div className="requirement-item">
            <div className="requirement-icon">{/* Icon placeholder */}</div>
            <div className="requirement-text">
              <p className="req-main">BVN</p>
              <p className="req-sub">(Bank Verification Number)</p>
            </div>
          </div>
          <div className="requirement-item">
            <div className="requirement-icon">{/* Icon placeholder */}</div>
            <div className="requirement-text">
              <p className="req-main">Valid Government-Issued ID</p>
            </div>
          </div>
          <div className="requirement-item">
            <div className="requirement-icon">{/* Icon placeholder */}</div>
            <div className="requirement-text">
              <p className="req-main">Proof Of Income Or Employment</p>
            </div>
          </div>
          <div className="requirement-item">
            <div className="requirement-icon">{/* Icon placeholder */}</div>
            <div className="requirement-text">
              <p className="req-main">Recent Utility Bill</p>
              <p className="req-sub">(Or Proof Of Address)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequirementsSection; 