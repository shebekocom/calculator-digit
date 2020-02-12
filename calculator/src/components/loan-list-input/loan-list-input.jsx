import React from 'react';
import PropTypes from 'prop-types';

import LoanItemInput from '../loan-item-imput/loan-item-imput';
import Toolkit from '../toolkit/toolkit';

const LoanListInput = ({ loanList }) => {
  return (
    <div className="loan_list_input">
      <Toolkit />
      <div>
        <p className="title_loan">Trade In Value</p>
        <LoanItemInput textItemInput={loanList.traidIn} />
      </div>
      <div>
        <p className="title_loan">Down Payment</p>
        <LoanItemInput textItemInput={loanList.downPayment} />
      </div>
    </div>
  );
};

LoanListInput.propTypes = {
  loanList: PropTypes.shape({
    traidIn: PropTypes.string.isRequired,
    downPayment: PropTypes.string.isRequired,
  }),
};

LoanListInput.defaultProps = {
  loanList: PropTypes.shape({
    traidIn: '',
    downPayment: '',
  }),
};

export default LoanListInput;
