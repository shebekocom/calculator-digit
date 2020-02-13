import React from 'react';
import PropTypes from 'prop-types';

import LeaseItemSelect from '../lease-item-select/lease-item-select';

const LeaseListSelection = ({ leaseList }) => {
  return (
    <div className="lease_list_selection">
      <LeaseItemSelect label="Approx. Credit Score" data={leaseList.creditScore} />
      <LeaseItemSelect label="Term (Month)" data={leaseList.term} />
      <LeaseItemSelect label="Annual Miles" data={leaseList.annualMiles} />
    </div>
  );
};

LeaseListSelection.propTypes = {
  leaseList: PropTypes.shape({
    creditScore: PropTypes.array.isRequired,
    annualMiles: PropTypes.array.isRequired,
    term: PropTypes.array.isRequired,
  }),
};
LeaseListSelection.defaultProps = {
  leaseList: PropTypes.shape({
    creditScore: '',
    annualMiles: '',
    term: '',
  }),
};

export default LeaseListSelection;
