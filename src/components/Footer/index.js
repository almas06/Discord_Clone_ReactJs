import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from "./logo1.svg"
import "./footer.css"

const Footer = () => {
  return (
  <Router>
  <div className='footer'>
      <div className="footer-container">
        <div className="row1">
          <div className="social">
            <h3>IMAGINE A<br/>PLACE</h3><br/>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-facebook-square"></i>
            <i class="fa fa-youtube-play"></i>
          </div>
          <div className="product">
            <ul>
              <h6>Product</h6>
              <li><Link to ="#">Download</Link></li>
              <li><Link to ="#">Nitro</Link></li>
              <li><Link to ="#">Status</Link></li>
            </ul>
          </div>
          <div className="company">
            <ul>
              <h6>Company</h6>
              <li><Link to ="#">About</Link></li>
              <li><Link to ="#">Jobs</Link></li>
              <li><Link to ="#">Branding</Link></li>
              <li><Link to ="#">Newsroom</Link></li>
            </ul>
          </div>
          <div className="resources">
            <ul>
              <h6>Resources</h6>
              <li><Link to ="#">College</Link></li>
              <li><Link to ="#">Support</Link></li>
              <li><Link to ="#">Safety</Link></li>
              <li><Link to ="#">Blog</Link></li>
              <li><Link to ="#">Feedback</Link></li>
              <li><Link to ="#">Developer</Link></li>
              <li><Link to ="#">Streamkit</Link></li>
            </ul>
          </div>
          <div className="policy">
            <ul>
              <h6>Policy</h6>
              <li><Link to ="#">Terms</Link></li>
              <li><Link to ="#">Privacy</Link></li>
              <li><Link to ="#">Cookie Settings</Link></li>
              <li><Link to ="#">Guidelines</Link></li>
              <li><Link to ="#">Acknowledgements</Link></li>
              <li><Link to ="#">Licences</Link></li>
              <li><Link to ="#">Moderation</Link></li>
            </ul>
          </div>
        </div>
        <div className="row2">
            <div className="logo">
              <img src={logo} alt="logo"/>
              <h4>Discord</h4>
            </div>
            <div className="button">
              <button type = "button">Sign Up</button>
            </div>
        </div>  
      
      </div>

    </div>
  </Router>);
};

export default Footer;
