import React from 'react';
import phoneImg from '../../assets/img/phone.png';
import starsImg from '../../assets/img/stars.png';
import geoImg from '../../assets/img/geo.png';

const InfoCardFooter = () => {
  return (
    <div className="infocard_footer">
      <p className="infocard_footer--adress">Magnussens Toyota of Palo Alto (Palo Alto, CA)</p>
      <p className="infocard_footer--wwww">
        <a href="wwww.toyotapaloalto.com">wwww.toyotapaloalto.com</a>
      </p>
      <p className="infocard_footer--telephone">
        <img className="infocard_footer--phone_image" src={phoneImg} alt="Telephone" />
        (855) 977-2913
      </p>
      <p className="infocard_footer--reviews">
        <img className="infocard_footer--stars_image" src={starsImg} alt="Starts" />
        (30 reviews)
      </p>
      <p className="infocard_footer--directions">
        <img className="infocard_footer--geo_image" src={geoImg} alt="Geo" />
        Directions
      </p>
    </div>
  );
};

export default InfoCardFooter;
