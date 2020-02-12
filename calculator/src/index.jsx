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
      traidIn: '0',
      downPayment: '0',
      creditScore: 'Exellent',
      apr: '3',
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
      <div>
        <CalculatorTabs />
        <LoanTab loan={state.loan} />
        <LeaseTab />
      </div>
      <div>
        <InfoCard />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
