import React from 'react';
import PropTypes from 'prop-types';

import LoanItemInput from '../loan-item-imput/loan-item-imput';
import Toolkit from '../toolkit/toolkit';

const LoanListInput = ({ loanList }) => {
  return (
    <div className="loan_list_input">
      <div className="loan_list_input-item">
        <p className="title_loan">
          Trade In Value
          <Toolkit />
        </p>
        <LoanItemInput textItemInput={loanList.traidIn} />
      </div>
      <div className="loan_list_input-item">
        <p className="title_loan">
          Down Payment
          <Toolkit />
        </p>
        <LoanItemInput textItemInput={loanList.downPayment} />
      </div>
      <div className="loan_list_input-item">
        <p className="title_loan">
          Estimated APR
          <Toolkit />
        </p>
        <LoanItemInput textItemInput={loanList.apr} />
      </div>
    </div>
  );
};

LoanListInput.propTypes = {
  loanList: PropTypes.shape({
    traidIn: PropTypes.string.isRequired,
    downPayment: PropTypes.string.isRequired,
    apr: PropTypes.string.isRequired,
  }),
};

LoanListInput.defaultProps = {
  loanList: PropTypes.shape({
    traidIn: '',
    downPayment: '',
    apr: '',
  }),
};

export default LoanListInput;
