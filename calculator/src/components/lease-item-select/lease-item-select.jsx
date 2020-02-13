import React from 'react';
import PropTypes from 'prop-types';

const LeaseItemSelect = ({ label, data }) => {
  const selectArr = data.map(el => (
    <option key={el.toString()} value={el}>
      {el}
    </option>
  ));
  return (
    <div className="lease_item_select">
      <p className="lease_item_select-caption">{label}</p>
      <select className="lease_item_select-feald" value="тест">
        {selectArr}
      </select>
    </div>
  );
};

LeaseItemSelect.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LeaseItemSelect;
