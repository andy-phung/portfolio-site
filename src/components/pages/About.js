import React from "react";
import { Link } from "react-router";

import '../../index.css';
import me from "../../pics/me.png";
import pic1 from "../../pics/pic1.png";
import pic2 from "../../pics/pic2.png";
import pic3 from "../../pics/pic3.png";
import pic4 from "../../pics/pic4.png";
import pic5 from "../../pics/pic5.png";
import pic6 from "../../pics/pic6.png";


const About = () => {
  return (
    <div className="h-auto w-[76.7vw] mt-[6.5vh] flex flex-col flex-shrink-0 flex-grow-0">
      <div className="h-[93.5vh] w-full">
        <Link className="text-small mb-[15px]" to="/">← back to home</Link>
        <div className="w-full flex flex-shrink-0 flex-grow-0">
          <div className="w-[20.9%] flex flex-col flex-shrink-0 flex-grow-0">
            <img src={me}/>
            <span className="mt-[3px] text-small leading-[0.75rem]">*fake tattoo LOL <br/>i don't have any better pictures of myself..</span>
          </div>
          <div className="w-[40.3%] mt-[-5px] ml-[10px] flex flex-col flex-shrink-0 flex-grow-0">
            <span className="text-normal">the tweaker</span>
            <span className="text-normal mt-[5px] leading-[1rem]">lorem ipsum dolor sit amet, consectetur adipiscing elit. sed lacinia massa metus, in dapibus libero placerat ac. quisque condimentum purus sem, ornare elementum nunc rutrum in. nunc vestibulum bibendum tincidunt. maecenas sit amet ullamcorper leo, in semper diam. pellentesque vel facilisis neque, vel ornare tortor. Integer imperdiet ante dui, tincidunt pretium quam vulputate id. etiam pulvinar euismod dolor nec aliquet.</span>
            <span className="text-normal mt-[12px] leading-[1rem]">until then, <br/>andy</span>
          </div>
        </div>
      </div>
      

      <div className="w-full mt-[50px] flex flex-col">
        <span className="text-normal mb-[3px]">
          lately...
        </span>
        <div className="w-full flex justify-between">
          <img className="h-[180px]" src={pic1}/>
          <img className="h-[180px]" src={pic2}/>
          <img className="h-[180px]" src={pic3}/>
          <img className="h-[180px]" src={pic4}/>
          <img className="h-[180px]" src={pic5}/>
          <img className="h-[180px]" src={pic6}/>
        </div>
      </div>
    </div>
  );
};


export default About;