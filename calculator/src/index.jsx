import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import CalculatorTabs from './components/calculator-tabs/calculator-tabs';
import LoanTab from './components/loan-tab/loan-tab';
import LeaseTab from './components/lease-tab/lease-tab';
import InfoCard from './components/infocard/infocard';

const App = () => {
  return (
    <div className="app">
      <div>
        <CalculatorTabs />
        <LoanTab />
        <LeaseTab />
      </div>
      <div>
        <InfoCard />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
