import React from "react";
import { Link } from 'react-router-dom';

import Arrow from "../../assets/icon-images/arrow.png";

import './style.scss';

const Navbar = () => {
  
  return (
    <div className="navbar-comp">
      <div className="navbar-comp-routing">
        <Link to="/">
          <img src={Arrow} alt="arrow" />
        </Link>
        <div className="page-title">
          <p>Event</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
