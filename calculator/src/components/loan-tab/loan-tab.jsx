import React from 'react';

import LoanPrice from '../loan-price/loan-price';
import LoanListInput from '../loan-list-input/loan-list-input';
import LoanListButton from '../loan-list-button/loan-list-button';

const LoanTab = () => {
  return (
    <div className="loan-tab">
      <LoanPrice />
      <LoanListInput />
      <LoanListButton />
    </div>
  );
};

export default LoanTab;
