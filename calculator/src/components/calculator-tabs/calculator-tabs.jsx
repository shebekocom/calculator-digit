import React from 'react';

const CalculatorTabs = () => {
  return (
    <div className="calculator_tabs">
      <div className="calculator_tabs_loan">
        <div className="calculator_tabs-item">
          <p className="calculator_tabs-item--hint">Est.Loan:</p>
          <p className="calculator_tabs-item--price">
            $683<span className="calculator_tabs-item--hint">/mo</span>
          </p>
        </div>
        <div className={activeTabIndex === 0 ? 'calculator_tabs-item active' : ''}
          onClick={this.changeTab.bind(this, 0)}
          onKeyDown={this.changeTab.bind(this, 0)}
          role="button"
          tabIndex={0}>
          <p className="calculator_tabs-item--hint">Est.Lease:</p>
          <p className="calculator_tabs-item--price">
            $511<span className="calculator_tabs-item--hint">/mo</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CalculatorTabs;
