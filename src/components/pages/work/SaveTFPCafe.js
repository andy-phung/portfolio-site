import React from "react";
import { Link } from "react-router";
import '../../../index.css';

import savetfp1 from "../workpics/savetfp1.png"; 
import savetfp2 from "../workpics/savetfp2.png"; 
import savetfp3 from "../workpics/savetfp3.png"; 

const SaveTFPCafe = () => {
  return (
    <div className="font-regular tracking-[0.01rem] leading-normal-all h-auto w-[76.7vw] mt-[6.5vh] flex flex-col flex-shrink-0 flex-grow-0">
      <Link className="text-small mb-[15px]" to="/">← back to home</Link>
      <div className="text-normal flex justify-between">
        <div className="w-[27.9%] flex flex-col justify-between">
          <div className="text-big">
            savetfp bakery + cafe
          </div>
          <div className="text-normal mb-[-1px]">
            print, visual design
          </div>
        </div>
        <div className="text-normal w-[67.5%] leading-desc">
        As part of a cafe pop-up for students at MIT, I created a series of flyers that were posted around campus, along with a menu posted at the venue. These graphics were designed to evoke the feeling of a real establishment offering quality hand-crafted pastries.
        </div>
      </div>
      <div className="text-normal year-margin">
        2024
      </div>
      <div className="text-normal flex justify-between flex-shrink-0 flex-grow-0">
        <div className="mt-[30px]">
          <a href="https://drive.google.com/file/d/1dHqF6bmSSWPu8iNvGeXpxdbhVUZ-44Vf/view?usp=sharing" target="_blank" className="underline">link to pdf ↗</a>
        </div>
        <div className="w-[67.5%] flex-col flex-shrink-0 flex-grow-0">
          <img className="aspect-[782/513] w-full mb-[10px]" src={savetfp1}/>
          <img className="aspect-[782/513] w-full" src={savetfp2}/>
        </div>
        
      </div>
      <div className="text-normal mt-[115px] flex justify-between flex-shrink-0 flex-grow-0">
        <div className="w-[27.9%] flex flex-col flex-shrink-0 flex-grow-0">
          <div className="mb-[30px]">
            PROCESS
          </div>
          <div>
          I wanted to visually translate these ideas into the main graphic:
          <ul className="list-disc list-inside mt-[2px] ps-[5px]">
            <li><span className="relative left-[-5px]">"This pop-up will feature pastries."</span></li>
            <li><span className="relative left-[-5px]">"These pastries are handmade."</span></li>
            <li><span className="relative left-[-5px]">"This event is special, unlike those we usually host."</span></li>
          </ul> <br/>
          The goal was for viewers to look at a flyer and immediately get at least one of these ideas, before reading the details below or to the side.
          <br/><br/>
          I illustrated the stages of making a croissant (making dough, proofing, and baking) to communicate the first two, and chose a minimalist illustration style as found in branding for existing cafes (right) to communicate the last.
          </div>
        </div>

        <div className="w-[67.5%] flex-col flex-shrink-0 flex-grow-0">
          <img className="w-full aspect-[8.5/11]" src={savetfp3}/>
          
          <div className="h-[11vh]">

          </div>
        </div>
      </div>
    </div>
  );
};


export default SaveTFPCafe;