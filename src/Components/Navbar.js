import React from "react";
import "./nav.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="icon">
        <img src="favicon.ico" alt="image not found" srcset="" id="icon1" />
      </div>
      <div className="items">
        <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/About' >About</Link></li>
          <li><Link to='/Contact' >Contact</Link></li>
         
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
