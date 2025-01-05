import React from "react";
import { Link } from "react-router";
import '../../../index.css';

import moonwrap1 from "../workpics/moonwrap1.png"; 
import moonwrap2 from "../workpics/moonwrap2.png"; 
import moonwrap3 from "../workpics/moonwrap3.png";
import moonwrap4 from "../workpics/moonwrap4.png";
import moonwrap5 from "../workpics/moonwrap5.png";
import moonwrap6 from "../workpics/moonwrap6.png";
import moonwrap7 from "../workpics/moonwrap7.png";
import moonwrap8 from "../workpics/moonwrap8.png";
import moonwrap9 from "../workpics/moonwrap9.png";
import moonwrap10 from "../workpics/moonwrap10.png";
import moonwrap11 from "../workpics/moonwrap11.png";
import moonwrap12 from "../workpics/moonwrap12.png";

const Moonwrap = () => {
  return (
    <div className="font-regular tracking-wide leading-normal-all h-auto w-[76.7vw] mt-[6.5vh] flex flex-col flex-shrink-0 flex-grow-0">
     <Link className="text-small mb-[15px]" to="/">← back to home</Link>
      <div className="text-normal flex justify-between">
        <div className="w-[27.9%] flex flex-col justify-between">
          <div className="text-big">
            moonwrap
          </div>
          <div className="text-normal mb-[-1px]">
            web, ui/ux, concept design
          </div>
        </div>
        <div className="text-normal w-[67.5%] leading-desc">
        Drawing from the rich history of Vietnamese lunar new year traditions, MOONWRAP is an exploration in generative type, where letters emerge from wrapping a rice cake according to simple rules. This type specimen was my final project for <a className="underline" href="https://architecture.mit.edu/classes/visual-communication-fundamentals-1" target="_blank">4.053</a>.
        </div>
      </div>
      <div className="text-normal year-margin">
        2024
      </div>
      <div className="text-normal flex justify-between flex-shrink-0 flex-grow-0">
        <div className="mt-[30px]">
          <a href="https://moonwrap.onrender.com/" target="_blank" className="underline">link to website ↗</a>
        </div>
        <div className="w-[67.5%] flex-col flex-shrink-0 flex-grow-0">
          <img className="aspect-[782/513] w-full mb-[10px]" src={moonwrap1}/>
          <img className="aspect-[782/513] w-full mb-[10px]" src={moonwrap2}/>
          <img className="aspect-[782/513] w-full" src={moonwrap3}/>
        </div>
        
      </div>
      <div className="text-normal mt-[115px] flex justify-between flex-shrink-0 flex-grow-0">
        <div className="w-[27.9%] flex flex-col flex-shrink-0 flex-grow-0">
          <div className="mb-[30px]">
            PROCESS
          </div>
          <div>
            The object I chose to work with throughout the semester was a leaf. This led me to complete my initial type study by creating an alphabet from leaves and branches (right) using simple rules: stems for stems, and leaves for all other parts of the letterforms.
            <br/><br/>
            For my final typeface, I was inspired to use a similar rule-based format and also draw from my Vietnamese heritage, since many traditional Asian foods use banana leaves as wrappings.
            <br/><br/>
            I arrived at <span className="font-italic">bánh tét</span> (sticky rice cake) as the medium for my letterforms, and defined wrapping rules to create stems, arms/legs, and other parts of type—and consolidated them all into as few rules as possible.
            <br/><br/>
            Since <span className="font-italic">bánh tét</span> is traditionally made for lunar new year, I decided to theme the type specimen for this typeface based on the various crafting activity guides and posters that you would normally find at lunar new year festivals.
          </div>
        </div>

        <div className="w-[67.5%] flex-col flex-shrink-0 flex-grow-0">
          <div className="mb-[5px] flex flex-shrink-0 flex-grow-0 justify-between">
            <img src={moonwrap4} className="w-[56.2%]"/>
            <div className="w-[42.7%] flex flex-col flex-shrink-0 flex-grow-0 justify-between">
              <img src={moonwrap5} className="w-full"/>
              <img src={moonwrap6} className="w-full"/>
            </div>
          </div>
          <div className="mb-[5px] flex flex-shrink-0 flex-grow-0 justify-between">
            <img src={moonwrap7} className="w-[49.6%]"/>
            <img src={moonwrap8} className="w-[49.6%]"/>
          </div>
          <div className="mb-[5px] flex flex-shrink-0 flex-grow-0 justify-between">
            <img src={moonwrap9} className="w-[49.6%]"/>
            <img src={moonwrap10} className="w-[49.6%]"/>
          </div>
          <img className="w-full" src={moonwrap12}/>
          
          <div className="h-[6.5vh]">

          </div>
        </div>
      </div>
    </div>
  );
};


export default Moonwrap;