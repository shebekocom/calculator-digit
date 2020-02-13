import React from 'react';
import PropTypes from 'prop-types';

const LeaseItemInput = ({ label, data }) => {
  return (
    <div className="lease_item_input">
      <p>{label}</p>
      <input type="text" value={data} />
    </div>
  );
};

LeaseItemInput.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default LeaseItemInput;
