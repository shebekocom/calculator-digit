import React from 'react';
import PropTypes from 'prop-types';

import LoanItemButton from '../loan-item-button/loan-item-button';
import Toolkit from '../toolkit/toolkit';

const LoanListButton = ({ loanList }) => {
  const listItems = loanList.terms.map(el => (
    <LoanItemButton key={el.toString()} textItemButton={el} />
  ));
  console.log(listItems);
  return (
    <div className="loan_list_button">
      <div>
        <p className="title_loan">
          Term (Months)
          <Toolkit />
        </p>
        <div className="loan_list_term">{listItems}</div>
      </div>
      <div>
        <p className="title_loan">Approx. Credit Score</p>
        <Toolkit />
        <LoanItemButton textItemButton={loanList.apr} />
      </div>
    </div>
  );
};

LoanListButton.propTypes = {
  loanList: PropTypes.shape({
    terms: PropTypes.array.isRequired,
    apr: PropTypes.string.isRequired,
  }),
};

LoanListButton.defaultProps = {
  loanList: PropTypes.shape({
    terms: '',
    apr: '',
  }),
};

export default LoanListButton;
