import React from 'react';

import LoanItemButton from '../loan-item-button/loan-item-button';
import Toolkit from '../toolkit/toolkit';

const LoanListButton = () => {
  return (
    <div className="loan_list_button">
      <Toolkit />
      <LoanItemButton />
    </div>
  );
};

export default LoanListButton;
