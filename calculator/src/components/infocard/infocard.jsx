import React from 'react';

import InfoCardButton from '../infocard-button/infocard-button';
import InfoCardHeader from '../infocard-header/infocard-header';
import InfoCardFooter from '../infocard-footer/infocard-footer';

const InfoCard = () => {
  return (
    <div className="infocard">
      <InfoCardHeader />
      <InfoCardButton />
      <InfoCardButton />
      <InfoCardFooter />
    </div>
  );
};

export default InfoCard;
