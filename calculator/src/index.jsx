import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import CalculatorTabs from './components/calculator-tabs/calculator-tabs';
import LoanTab from './components/loan-tab/loan-tab';
import LeaseTab from './components/lease-tab/lease-tab';
import InfoCard from './components/infocard/infocard';

const App = () => {
  const state = {
    loan: {
      price: '37813',
      terms: [36, 48, 60, 72, 84],
      traidIn: 0,
      downPayment: 0,
      creditScore: [650, 700, 750, 850],
      apr: 3,
    },
    lease: {
      zipCode: '918999',
      downPayment: '1000',
      traidIn: '0',
      creditScore: '800',
      annualMiles: '400',
      term: '36',
    },
  };
  return (
    <div className="app">
      <div className="calculator_wrapper">
        <CalculatorTabs />
        <LoanTab loan={state.loan} />
        <LeaseTab />
      </div>
      <div className="infocard_wrapper">
        <InfoCard />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
