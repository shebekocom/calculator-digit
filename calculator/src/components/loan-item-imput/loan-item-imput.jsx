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
      <div сlassName="loan_item_input">
        <input type="text" value={value} onChange={this.handleChange} />
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
