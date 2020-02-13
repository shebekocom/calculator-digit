import React from 'react';

import InfoCardButton from '../infocard-button/infocard-button';
import InfoCardHeader from '../infocard-header/infocard-header';
import InfoCardFooter from '../infocard-footer/infocard-footer';

const InfoCard = () => {
  return (
    <div className="infocard">
      <InfoCardHeader />
      <div className="buttons">
        <InfoCardButton label="Show the edmunds deal" />
        <InfoCardButton label="Get dealer offer" />
      </div>
      <InfoCardFooter />
    </div>
  );
};

export default InfoCard;
