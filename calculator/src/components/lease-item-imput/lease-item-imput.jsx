import React from 'react';
import PropTypes from 'prop-types';

export default class LeaseItemInput extends React.Component {
  constructor({ label, data, sign }) {
    super(label, data, sign);
    this.state = { value: data };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    const { label, sign } = this.props;
    return (
      <div className="lease_item_input">
        <p className="lease_item_input-caption">{label}</p>
        <div className="lease_item_input-wrapper">
          <input
            type="text"
            className={sign ? 'lease_item_input-feald' : 'lease_item_input-feald  no_sign'}
            value={value}
            onChange={this.handleChange}
          />
          {sign && <p className="lease_item_input-sign">{sign}</p>}
        </div>
      </div>
    );
  }
}

LeaseItemInput.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  sign: PropTypes.string,
};

LeaseItemInput.defaultProps = {
  sign: null,
};
