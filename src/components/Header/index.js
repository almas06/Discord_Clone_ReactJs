import React from 'react';
import "./header.css"

const Header = () => {
  return <div className="header">
      <div className="header-content">
          <div className="header-main-title">
          IMAGINE A PLACE...
          </div>
          <div className="header-desc">
          ...where you can belong to a school club, a gaming group, or a worldwide art community.<br/>
           Where just you and a handful of friends can spend time together.
           A place that makes it easy<br/> to talk every day and hang out more often.
          </div>
          <div className="buttons">
              <button className="btn1"><i class="fa fa-download"></i>Download for Linux</button>
              <button className="btn2">Open Discord in your Browser</button>
          </div>
      </div>
  </div>;
};

export default Header;
