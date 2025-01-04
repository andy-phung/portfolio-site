import React from "react";
import { Link } from "react-router";
import '../../../index.css';

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
        <div className="w-[67.5%] leading-[1.075rem]">
        Drawing from the rich history of Vietnamese lunar new year traditions, MOONWRAP is an exploration in generative type, where letters emerge from wrapping a rice cake according to simple rules. This type specimen was my final project for MIT's <a className="underline" href="https://architecture.mit.edu/classes/visual-communication-fundamentals-1" target="_blank">4.053</a>.
        </div>
      </div>
      <div className="text-normal mt-[15px]">
        2024
      </div>
      <div className="text-normal flex justify-between flex-shrink-0 flex-grow-0">
        <div className="mt-[30px]">
          <a href="https://moonwrap.onrender.com/" target="_blank" className="underline">link to website ↗</a>
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
            The object I chose to work with throughout the semester was a leaf. This led me to complete my initial type study by creating an alphabet from leaves and branches (right) using simple rules: stems for stems, and leaves for all other parts of the letterforms.
            <br/><br/>
            For my final typeface, I was inspired to both use a similar rule-based format and draw from my Vietnamese heritage, since many traditional Asian foods use banana leaves as wrappings.
            <br/><br/>
            Arriving at <i>bánh tét</i> (sticky rice cake) as the medium for my letterforms, I defined wrapping rules to create stems, arms/legs, and other parts of type—and consolidated them all into as few rules as possible.
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


export default Moonwrap;