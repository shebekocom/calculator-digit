import React from 'react';
import PropTypes from 'prop-types';

import LeaseListInput from '../lease-list-input/lease-list-input';
import LeaseListSelection from '../lease-list-selection/input-list-selection';

const LeaseTab = ({ lease }) => {
  return (
    <div className="lease-tab">
      <LeaseListInput leaseList={lease} />
      <LeaseListSelection leaseList={lease} />
    </div>
  );
};

LeaseTab.propTypes = {
  lease: PropTypes.shape({
    zipCode: PropTypes.string.isRequired,
    downPayment: PropTypes.array.isRequired,
    traidIn: PropTypes.string.isRequired,
    creditScore: PropTypes.array.isRequired,
    annualMiles: PropTypes.array.isRequired,
    term: PropTypes.array.isRequired,
  }),
};

LeaseTab.defaultProps = {
  lease: PropTypes.shape({
    zipCode: '',
    downPayment: '',
    traidIn: '',
    creditScore: '',
    annualMiles: '',
    term: '',
  }),
};

export default LeaseTab;
