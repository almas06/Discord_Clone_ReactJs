import React from 'react';
import tech from "./tech_img.svg"
import "./tech.css"

const Tech = () => {
  return <div className='tech'>
      <div className="tech-content">
        <div className="tech-title">
                RELIABLE TECH FOR STAYING CLOSE
        </div>
        <div className="tech-desc">
                Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their <br/>
                games, or gather up and have a drawing session with screen share.
        </div>
        <div className="tech-img">
            <img src={tech} alt='tech' />
        </div>
        <div className="tech-download">
              <h5>Ready to start your journey?</h5>
              <div className="btns">
              <button className="btn"><i class="fa fa-download"></i>Download for Windows</button>
              </div>
        </div>
      </div>
  </div>;
};

export default Tech;
