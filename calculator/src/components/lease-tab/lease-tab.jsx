import React from 'react';

import LeaseListInput from '../lease-list-input/lease-list-input';
import LeaseListSelection from '../lease-list-selection/input-list-selection';

const LeaseTab = () => {
  return (
    <div className="lease-tab">
      <LeaseListInput />
      <LeaseListSelection />
    </div>
  );
};

export default LeaseTab;
