import React from 'react';
import PropTypes from 'prop-types';

import LoanItemButton from '../loan-item-button/loan-item-button';
import Toolkit from '../toolkit/toolkit';

const LoanListButton = ({ loanList }) => {
  const listTerms = loanList.terms.map(el => (
    <LoanItemButton key={el.toString()} textItemButton={el} />
  ));
  const listApr = loanList.creditScore.map(el => (
    <LoanItemButton key={el.toString()} textItemButton={el} />
  ));
  return (
    <div className="loan_list_button">
      <div className="loan_list_button-container">
        <p className="title_loan">Term (Months)</p>
        <div className="loan_list_term">{listTerms}</div>
      </div>
      <div className="loan_list_button-container">
        <p className="title_loan">
          Approx. Credit Score
          <Toolkit />
        </p>
        <div className="loan_list_term">{listApr}</div>
      </div>
    </div>
  );
};

LoanListButton.propTypes = {
  loanList: PropTypes.shape({
    terms: PropTypes.array.isRequired,
    creditScore: PropTypes.string.isRequired,
  }),
};

LoanListButton.defaultProps = {
  loanList: PropTypes.shape({
    terms: '',
    creditScore: '',
  }),
};

export default LoanListButton;
