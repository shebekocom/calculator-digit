import React from 'react';
import PropTypes from 'prop-types';

const InfoCardButton = ({ label }) => {
  return (
    <button className="buttons-item infocard_button" type="button">
      {label}
    </button>
  );
};

export default InfoCardButton;

InfoCardButton.propTypes = {
  label: PropTypes.string.isRequired,
};
