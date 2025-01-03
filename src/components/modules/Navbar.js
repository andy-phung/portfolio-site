import React from "react";
import { Link } from "react-router";
import '../../index.css';

const Navbar = () => {
  return (
    <div className="h-[87vh] w-[14.2vw] mr-[2.4vw] fixed left-[2.9vw] top-[6.5vh] flex flex-col">
      <div className="min-h-[130px] w-full bg-[#D9D9D9] flex flex-col justify-center items-center">
        <Link to="/"> home </Link>
        <Link to="/about"> about </Link>
      </div>
      <div className="font-semibold text-normal mt-[17px]">
        andy phung
      </div>

      <div className="font-regular text-normal mt-[17px]">
        hi! i'm a second-year interaction design major @ mit, also majoring in cognitive science & cs.
      </div>
      <div className="font-regular text-normal mt-[8px]">
        currently working on the future of ai & educational toys @ mit media lab!
      </div>

      <div className="font-regular text-normal mt-[20px]">
        <a href="mailto:phunga@mit.edu">✉ email</a><br/>
        <a href="https://www.linkedin.com/in/andy-phung/" target="_blank">☞ linkedin</a><br/>
        <a href="https://drive.google.com/file/d/1zNKA11kJ7u8TD86WlgsEVB6Zdxbr4yhH/view?usp=sharing" target="_blank">🗏 resume</a><br/>
      </div>
    

    </div>
  );
};


export default Navbar;