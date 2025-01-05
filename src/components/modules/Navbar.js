import React from "react";
import { Link } from "react-router";
import '../../index.css';

import camera from "./navbarpics/camera_no_artboard.png";
import polaroid from "./navbarpics/polaroid_no_artboard.png";

const Navbar = () => {
  return (
    <div className="leading-bio h-[87vh] w-[14.2vw] mr-[2.4vw] fixed left-[2.9vw] top-[6.5vh] flex flex-col">
      <div className="relative min-h-[130px] max-h-[130px] w-full flex justify-center items-center">
        <Link className="navbar-hover-home w-[35%] z-[1]" to="/"><img className="" src={camera}/><div className="font-italic text-normal absolute right-[5px] bottom-0 home-text">
        home
        </div></Link>
        <Link className="navbar-hover-about w-[25%] ml-[-25px]" to="/about"><img className="" src={polaroid}/><div className="font-italic text-normal absolute right-[5px] bottom-0 about-text">
        about me
        </div></Link>
        
        
      </div>
      <div className="font-semibold text-normal mt-[0px]">
        andy phung.
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