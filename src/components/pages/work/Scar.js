import React from "react";
import { Link } from "react-router";
import '../../../index.css';

import scar from "../landingpics/scar.png"; 

const Scar = () => {
    return (
        <div className="font-regular tracking-[0.01rem] leading-normal-all h-auto w-[76.7vw] mt-[6.5vh] flex flex-col flex-shrink-0 flex-grow-0">
      <Link className="text-small mb-[15px]" to="/">← back to home</Link>
      <div className="text-normal flex justify-between">
        <div className="w-[27.9%] flex flex-col justify-between">
          <div className="text-big">
            scar
          </div>
          <div className="text-normal mb-[-1px]">
            fab, interaction design
          </div>
        </div>
        <div className="text-normal w-[67.5%] leading-desc">
            Through the act of arm wrestling, this drawing machine visualizes the consequences of conflict by forcing participants to carve a wound into a piece of gel. I made this with <a className="underline" href="https://www.instagram.com/alex.h.tran/" target="_blank">Alex Tran</a> over a span of three days as our second project for <a className="underline" href="https://architecture.mit.edu/classes/design-studio-how-design-intensive-1" target="_blank">4.02A</a>.
        </div>
      </div>
      <div className="text-normal year-margin">
        2025
      </div>
      <div className="text-normal flex justify-between flex-shrink-0 flex-grow-0">
        <div className="mt-[30px]">
        </div>
        <div className="w-[67.5%] flex-col flex-shrink-0 flex-grow-0">
         <img className="aspect-[782/513] w-full mb-[10px]" src={scar}/>
        </div>
        
      </div>
    </div>
    );
}

export default Scar;