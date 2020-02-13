import React from 'react';

const CalculatorTabs = () => {
  return (
    <div className="calculator_tabs">
      <div className="calculator_tabs-item">
        <p className="calculator_tabs-item--hint">Est.Loan:</p>
        <p className="calculator_tabs-item--price">
          $683<span className="calculator_tabs-item--hint">/mo</span>
        </p>
      </div>
      <div className="calculator_tabs-item">
        <p className="calculator_tabs-item--hint">Est.Lease:</p>
        <p className="calculator_tabs-item--price">
          $511<span className="calculator_tabs-item--hint">/mo</span>
        </p>
      </div>
    </div>
  );
};

export default CalculatorTabs;
