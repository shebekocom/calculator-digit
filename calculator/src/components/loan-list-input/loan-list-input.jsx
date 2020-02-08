import React from 'react';

import LoanItemInput from '../loan-item-imput/loan-item-imput';
import Toolkit from '../toolkit/toolkit';

const LoanListInput = () => {
  return (
    <div className="loan_list_input">
      <Toolkit />
      <LoanItemInput />
    </div>
  );
};

export default LoanListInput;
