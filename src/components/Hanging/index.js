import React from 'react';
import hanging from "./hanging_out_easy_landing.svg"
import "./hanging.css"

const Hanging = () => {
  return <div className='hanging'>
  <div className="hanging-row">
  <div className='hanging-img'>
      <img src={hanging} alt='hanging-out'></img>
  </div>
  <div className='hanging-content'>
       <div className="hanging-main-title">
            Where hanging<br/> out is easy
       </div>
       <div className="hanging-desc">
            Grab a seat in a voice channel when you’re<br/>
            free. Friends in your server can see you’re <br/>
            around and instantly pop in to talk without<br/>
            having to call.
       </div>
  </div>
  </div>
</div>;
};

export default Hanging;
