import React from 'react';
import fandom from "./fabdom_landing.svg"
import "./fandom.css"

const Fandom = () => {
  return <div className='fandom'>
  <div className="fandom-row">
  <div className='fandom-img'>
      <img src={fandom} alt='fandom-only'></img>
  </div>
  <div className='fandom-content'>
       <div className="fandom-main-title">
            From few to a<br/> fandom
       </div>
       <div className="fandom-desc">
       Get any community running with moderation <br/>
       tools and custom member access. Give<br/>
        members special powers, set up private <br/>
        channels, and more.
       </div>
  </div>
  </div>
</div>;
};

export default Fandom;
