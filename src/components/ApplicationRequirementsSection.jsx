import React from 'react';
import './ApplicationRequirementsSection.css';

function ApplicationRequirementsSection() {
  return (
    <section className="application-requirements">
      <div className="container">
        <h2 className="requirements-title">To apply, you'll need</h2>
        <div className="requirements-grid">
          <div className="requirement-item">
            <div className="requirement-icon">{/* Icon placeholder */}</div>
            <div className="requirement-text">
              <div className="requirement-text-row">
                <p className="requirement-main">BVN</p>
                <p className="requirement-sub">(Bank Verification Number)</p>
              </div>
            </div>
          </div>
          <div className="requirement-item">
            <div className="requirement-icon">{/* Icon placeholder */}</div>
            <div className="requirement-text">
              <p className="requirement-main">Valid Government-Issued ID</p>
            </div>
          </div>
          <div className="requirement-item">
            <div className="requirement-icon">{/* Icon placeholder */}</div>
            <div className="requirement-text">
              <p className="requirement-main">Proof Of Income Or Employment</p>
            </div>
          </div>
          <div className="requirement-item">
            <div className="requirement-icon">{/* Icon placeholder */}</div>
            <div className="requirement-text">
              <div className="requirement-text-row">
                <p className="requirement-main">Recent Utility Bill</p>
                <p className="requirement-sub">(Or Proof Of Address)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationRequirementsSection; 