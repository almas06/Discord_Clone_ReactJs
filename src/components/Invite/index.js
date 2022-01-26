import React from 'react';
import invite from "./invite_only_landing.svg"
import "./invite.css"

const Invite = () => {
  return <div className='invite'>
      <div className="invite-row">
      <div className='invite-img'>
          <img src={invite} alt='invite-only'></img>
      </div>
      <div className='invite-content'>
           <div className="invite-main-title">
                Create an<br/> invite-only<br/> place where you <br/>belong
           </div>
           <div className="invite-desc">
                Discord servers are organized into topic-<br/>
                based channels where you can collaborate,<br/>
                share, and just talk about your day without<br/>
                clogging up a group chat.
           </div>
      </div>
      </div>
  </div>;
};

export default Invite;

