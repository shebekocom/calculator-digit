import React from 'react';
import PropTypes from 'prop-types';

import LeaseItemInput from '../lease-item-imput/lease-item-imput';

const LeaseListInput = ({ leaseList }) => {
  return (
    <div className="lease_list_input">
      <LeaseItemInput label="Home ZIP Code" data={leaseList.zipCode} />
      <LeaseItemInput label="Traid-in Value" sign="$" data={leaseList.traidIn} />
      <LeaseItemInput label="Down Payment" sign="$" data={leaseList.downPayment} />
    </div>
  );
};

LeaseListInput.propTypes = {
  leaseList: PropTypes.shape({
    zipCode: PropTypes.string.isRequired,
    downPayment: PropTypes.string.isRequired,
    traidIn: PropTypes.string.isRequired,
  }),
};
LeaseListInput.defaultProps = {
  leaseList: PropTypes.shape({
    zipCode: '',
    downPayment: '',
    traidIn: '',
  }),
};
export default LeaseListInput;
