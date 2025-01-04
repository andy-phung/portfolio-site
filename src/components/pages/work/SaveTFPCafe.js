import React from "react";
import { Link } from "react-router";
import '../../../index.css';

const SaveTFPCafe = () => {
  return (
    <div className="font-regular tracking-wide leading-normal-all h-auto w-[76.7vw] mt-[6.5vh] flex flex-col flex-shrink-0 flex-grow-0">
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
        <div className="w-[67.5%] leading-[1rem]">
        As part of a cafe pop-up hosted for students at MIT, I created a series of flyers that were posted around campus, along with a menu that was posted at the venue. These graphics were designed to evoke the feeling of a real establishment offering quality hand-crafted pastries.
        </div>
      </div>
      <div className="text-normal mt-[15px]">
        2024
      </div>
      <div className="text-normal flex justify-between flex-shrink-0 flex-grow-0">
        <div className="mt-[30px]">
          <a href="" target="_blank" className="underline">link to pdf ↗</a>
        </div>
        <div className="w-[67.5%] flex-col flex-shrink-0 flex-grow-0">
          <div className="aspect-[782/513] w-full bg-[#D9D9D9] mb-[5px]">
          </div>
          <div className="aspect-[782/513] w-full bg-[#D9D9D9]">
          </div>
        </div>
        
      </div>
      <div className="text-normal mt-[50px] flex justify-between flex-shrink-0 flex-grow-0">
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
          The goal was for viewers to look at a flyer and immediately get one of these ideas, before reading the details below or to the side.
          </div>
        </div>

        <div className="w-[67.5%] flex-col flex-shrink-0 flex-grow-0">
          <div className="aspect-[782/513] w-full bg-[#D9D9D9] mb-[5px]">
          </div>
          <div className="aspect-[782/513] w-full bg-[#D9D9D9]">
          </div>
          
          <div className="h-[6.5vh]">

          </div>
        </div>
      </div>
    </div>
  );
};


export default SaveTFPCafe;