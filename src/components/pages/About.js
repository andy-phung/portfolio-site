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
    <div className="font-regular leading-bio h-auto w-[76.7vw] mt-[5.5vh] flex flex-col flex-shrink-0 flex-grow-0">
      <div className="h-[93.5vh] w-full">
        <Link className="text-small mb-[15px]" to="/">← back to home</Link>
        <div className="w-full flex flex-shrink-0 flex-grow-0 mt-[15px]">
          <div className="w-[28.5vw] flex flex-col flex-shrink-0 flex-grow-0">
            <img rel="preload" src={me}/>
            <span className="mt-[3px] text-small leading-[0.75rem]">*fake tattoo LOL <br/>i don't have any better pictures of myself..</span>
          </div>
          <div className="w-[32.4%] mt-[-5px] ml-[14px] flex flex-col flex-shrink-0 flex-grow-0">
            <div className="text-normal mt-[2px]">
              <div className="">hi, thanks for stopping by! i'm andy, a sophomore at mit passionate about using design to bring stories to life.</div> 
              <div className="mt-[0.75rem]">i come from the bay area, where i'm so grateful to have been supported by my parents, friends, and a lively vietnamese-american community. outside of school, i enjoy baking, dancing, making spotify playlists, going to concerts, and ranking restaurants on beli.</div>
              <div className="mt-[0.75rem]">as a designer, i hope to create thoughtful, yet fun experiences that are always informed by the people they're made for—and that help us appreciate the world around us just a little more.</div>
              <div className="mt-[1rem]">until then,<br/>andy</div>
              
            </div>
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