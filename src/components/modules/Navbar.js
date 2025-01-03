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
        ✉ email <br/>
        ☞ linkedin <br/>
        🗏 resume <br/>
      </div>
    

    </div>
  );
};


export default Navbar;