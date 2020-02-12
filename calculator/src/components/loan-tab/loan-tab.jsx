import React from 'react';
import PropTypes from 'prop-types';

import LoanPrice from '../loan-price/loan-price';
import LoanListInput from '../loan-list-input/loan-list-input';
import LoanListButton from '../loan-list-button/loan-list-button';

const LoanTab = ({ loan }) => {
  return (
    <div className="loan-tab">
      <LoanPrice />
      <LoanListInput loanList={loan} />
      <LoanListButton loanList={loan} />
    </div>
  );
};

LoanTab.propTypes = {
  loan: PropTypes.shape({
    price: PropTypes.string.isRequired,
    terms: PropTypes.array.isRequired,
    traidIn: PropTypes.string.isRequired,
    downPayment: PropTypes.string.isRequired,
    creditScore: PropTypes.string.isRequired,
    apr: PropTypes.string.isRequired,
  }),
};

LoanTab.defaultProps = {
  loan: PropTypes.shape({
    price: '',
    terms: '',
    traidIn: '',
    downPayment: '',
    creditScore: '',
    apr: '',
  }),
};

export default LoanTab;
