import React from "react";
import { Link } from "react-router";
import '../../../index.css';

import readersnote from "../workpics/readersnote.png";

const ReadersNote = () => {
  return (
    <div className="font-regular tracking-wide leading-normal-all h-auto w-[76.7vw] mt-[6.5vh] flex flex-col flex-shrink-0 flex-grow-0">
      <Link className="text-small mb-[15px]" to="/">← back to home</Link>
      <div className="text-normal flex justify-between">
        <div className="w-[27.9%] flex flex-col justify-between">
          <div className="text-big">
            [ reader's note ]
          </div>
          <div className="text-normal mb-[-1px]">
            print, visual + concept design
          </div>
        </div>
        <div className="w-[67.5%] leading-desc flex flex-col justify-end">
          <br/>
          <br/>
          A love letter to fiction, writing, and storytelling—presented as an artist's book.
        </div>
      </div>
      <div className="text-normal year-margin">
        2025
      </div>
      <div className="text-normal flex justify-between flex-shrink-0 flex-grow-0">
        <div className="mt-[30px]">
          coming soon!
        </div>
        <div className="w-[67.5%] flex-col flex-shrink-0 flex-grow-0">
          <img className="w-full" src={readersnote}/>
        </div>
      </div>
    </div>
  );
};


export default ReadersNote;