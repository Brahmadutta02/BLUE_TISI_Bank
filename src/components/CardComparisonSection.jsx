import React from 'react';
import './CardComparisonSection.css';

function CardComparisonSection() {
  return (
    <section className="card-comparison">
      <div className="container">
        <h2 className="comparison-title">Compare and Choose <br/> Your Favorite Card</h2>
        
        <div className="card-visuals">
          {/* Placeholders for credit card images */}
          <div className="comp-card-placeholder red-comp-card"></div>
          <div className="comp-card-placeholder dark-comp-card"></div>
          <div className="comp-card-placeholder blue-comp-card"></div>
        </div>
        
        <div className="comparison-table">
          {/* Table Headers */}
          <div className="table-row header-row">
            <div className="table-cell"></div> {/* Empty cell for row titles */}
            <div className="table-cell">Ruby Corps Members Card</div>
            <div className="table-cell">Onyx Military Personnel Card</div>
            <div className="table-cell">Blue Medic Card</div>
          </div>

          {/* Limit Range Row */}
          <div className="table-row">
            <div className="table-cell">Limit Range</div>
            <div className="table-cell">$1,000 - $5,000</div>
            <div className="table-cell">$2,000 - $10,000</div>
            <div className="table-cell">$5,000 - $20,000</div>
          </div>

          {/* APR Row */}
          <div className="table-row">
            <div className="table-cell">APR</div>
            <div className="table-cell">19.99%</div>
            <div className="table-cell">17.49%</div>
            <div className="table-cell">14.99%</div>
          </div>

          {/* Annual Fees Row */}
          <div className="table-row">
            <div className="table-cell">Annual Fees</div>
            <div className="table-cell">$0</div>
            <div className="table-cell">$99</div>
            <div className="table-cell">$199</div>
          </div>

          {/* Rewards Row */}
          <div className="table-row">
            <div className="table-cell">Rewards</div>
            <div className="table-cell">1% Cashback On All Purchases</div>
            <div className="table-cell">2% On Groceries & Gas</div>
            <div className="table-cell">3x Points On Travel & Dining</div>
          </div>

          {/* Eligibility Row */}
          <div className="table-row">
            <div className="table-cell">Eligibility</div>
            <div className="table-cell">Active NYSC Corp Member</div>
            <div className="table-cell">Medical Doctor/Nurse</div>
            <div className="table-cell">Active Service Member; Navy, Airforce, Army</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardComparisonSection; 