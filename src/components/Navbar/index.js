import React from 'react';
import "./navbar.css"
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from "./logo1.svg"

const Navbar = () => {
  return (
  <Router>
      <div className="navbar">
      <div className="navbar-wrapper">
      <div className="navbar-logo">
        <img src={logo} alt="logo"/>
        <h4>Discord</h4>
      </div>
      <div className="navbar-menu">
         <ul>
             <li><Link to ="#">Download</Link></li>
             <li><Link to ="#">Nitro</Link></li>
             <li><Link to ="#">Safety</Link></li>
             <li><Link to ="#">Support</Link></li>
             <li><Link to ="#">Blog</Link></li>
             <li><Link to ="#">Careers</Link></li>
         </ul>  
      </div>
      <div className="navbar-btn">
           <button type = "button"><Link to ="https://discord.com/login">Login</Link></button>
      </div>
      </div>

  </div>
  </Router>
    );
};

export default Navbar;
