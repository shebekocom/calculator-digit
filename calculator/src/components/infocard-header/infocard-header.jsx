import React from 'react';
import arrowIgm from '../../assets/img/arrow.png';

const InfoCardHeader = () => {
  return (
    <div className="infocard_header">
      <div className="infocard_header-mrsp_wrapper">
        <p className="infocard_header-mrsp_wrapper--msrp">MSRP</p>
        <p className="infocard_header-mrsp_wrapper--msrp_price">$42,818</p>
      </div>
      <div className="infocard_header-payment">
        <p className="infocard_header-payment--test">Est.Loan.Payment</p>
        <p className="infocard_header-payment--price">
          $683/mo
          <br />
          <span className="infocard_header-payment--calculate">
            calculate taxes and fees
            <img className="infocard_header-payment--arrow" src={arrowIgm} alt="" />
          </span>
        </p>
      </div>
      <hr className="infocard_header--line" />
    </div>
  );
};

export default InfoCardHeader;
