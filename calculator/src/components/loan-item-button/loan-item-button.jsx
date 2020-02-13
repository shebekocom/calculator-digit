import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoanItemButton extends Component {
  constructor({ textItemButton }) {
    super(textItemButton);
    this.state = { value: textItemButton };
  }

  render() {
    const { value } = this.state;
    return (
      <div className="loan_item_button">
        <p className="loan_item_button-text">{value}</p>
      </div>
    );
  }
}

LoanItemButton.propTypes = {
  textItemButton: PropTypes.string,
};
LoanItemButton.defaultProps = {
  textItemButton: '',
};
