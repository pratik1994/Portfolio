import React from "react";
import Avatar from "../images/badge.png";
// import {FaAlignRight} from 'react-icons/fa';

const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <img src={Avatar} alt="Avatar"></img>
      <h2>{title}</h2>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
