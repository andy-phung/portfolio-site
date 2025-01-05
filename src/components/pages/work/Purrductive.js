import React from "react";
import { Link } from "react-router";
import '../../../index.css';

import purrductive1 from "../workpics/purrductive1.png"; 
import purrductive2 from "../workpics/purrductive2.png"; 
import purrductive3 from "../workpics/purrductive3.png";
import purrductive4 from "../workpics/purrductive4.png";
import purrductive5 from "../workpics/purrductive5.png";
import purrductive6 from "../workpics/purrductive6.png";
import purrductive7 from "../workpics/purrductive7.png";
import purrductive8 from "../workpics/purrductive8.jpg";

const Purrductive = () => {
  return (
    <div className="font-regular tracking-wide leading-normal-all h-auto w-[76.7vw] mt-[6.5vh] flex flex-col flex-shrink-0 flex-grow-0">
        <Link className="text-small mb-[15px]" to="/">← back to home</Link>
        <div className="text-normal flex justify-between">
          <div className="w-[27.9%] flex flex-col justify-between">
            <div className="text-big">
              purrductive
            </div>
            <div className="text-normal mb-[-1px]">
              full stack web, ui/ux
            </div>
          </div>
          <div className="w-[67.5%] leading-desc">
          Purrductive is a virtual study space where you complete tasks to attract cats! Users can join rooms with their friends and work to unlock new cats, achievements, and more. This was created over a span of two weeks for <a className="underline" href="https://weblab.mit.edu/" target="_blank">web.lab</a> 2024, winning honorable mention.
          </div>
        </div>
        <div className="text-normal year-margin">
          2024
        </div>
        <div className="text-normal flex justify-between flex-shrink-0 flex-grow-0">
          <div className="mt-[30px]">
            <a href="https://purrductive.onrender.com/" target="_blank" className="underline">link to website ↗</a>
          </div>
          <div className="w-[67.5%] flex-col flex-shrink-0 flex-grow-0">
            <img className="mb-[10px] w-full aspect-[782/513]" src={purrductive1}/>
            <img className="mb-[10px] w-full aspect-[782/513]" src={purrductive2}/>
            <img className="w-full aspect-[782/513]" src={purrductive3}/>
          </div>
          
        </div>
        <div className="text-normal mt-[115px] flex justify-between flex-shrink-0 flex-grow-0">
          <div className="w-[27.9%] flex flex-col flex-shrink-0 flex-grow-0">
            <div className="mb-[30px]">
              PROCESS
            </div>
            <div>
            <i>note: this was created pre-design pivot, so there wasn't as much of a process here..</i>
            <br/><br/>
            Going into this class, I knew I wanted to make some sort of productivity tool. Using inspiration from various virtual study rooms (Fiveable Rooms) and task boards (Notion), along with my love for cats, I came up with the basic idea: completing tasks to spawn cats!
            <br/><br/>
            Aside from the <a className="underline" href="https://weblab.mit.edu/about/#rules" target="_blank">required features for web.lab websites</a>, I added rooms with join codes, user profiles, achievements, and rare cats with a low spawn rate. These features were all inspired by cat games I've loved playing in the past: Neko Atsume, Cats and Soup, Purrgatory, and more.
            <br/><br/>
            The overall look of the interface was inspired by MMO games like Club Penguin, and designed to create a warm, cozy atmosphere. In addition, the UI was designed to be as simple as possible, with only a sidebar and a single modal component for most information. 
            </div>
          </div>
  
          <div className="w-[67.5%] flex-col flex-shrink-0 flex-grow-0">
            <img className="w-full mb-[5px]" src={purrductive4}/>
            <img className="w-full mb-[5px]" src={purrductive5}/>
            <img className="w-full mb-[5px]" src={purrductive6}/>
            <img className="w-full mb-[5px]" src={purrductive7}/>
            <img className="w-full" src={purrductive8}/>
            <div className="text-normal font-regular leading-normal-all mt-[5px]">one of the rare cats! her name is michi</div>

            <div className="h-[6.5vh]">
  
            </div>
          </div>
        </div>
      </div>
  );
};


export default Purrductive;