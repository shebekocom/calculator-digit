import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoanItemInput extends Component {
  constructor({ textItemInput }) {
    super(textItemInput);
    this.state = { value: textItemInput };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="loan_item_input">
        <div className="loan_input-field--dollar">
          <p>$</p>
        </div>
        <input
          type="text"
          className="loan_input-field"
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

LoanItemInput.propTypes = {
  textItemInput: PropTypes.string,
};
LoanItemInput.defaultProps = {
  textItemInput: '',
};
