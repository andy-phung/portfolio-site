import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../../index.css';

// switch to woff + wait until everything loaded

const Home = () => {
  return (
    <div className="mt-[6.5vh] h-auto w-[76.7vw] font-regular flex flex-row justify-between">
        <div className="w-[50%] h-auto flex flex-col shrink-0">
            <Link to="/moonwrap" className="w-[98%] mb-[33px] border-black border-2">
                <div className="aspect-[571/368] w-full bg-[#D9D9D9]">

                </div>
                <div className="text-normal">
                moonwrap
                </div>
            </Link>
            <Link to="/purrductive" className="w-[98%] border-black border-2">
                <div className="aspect-[571/368] w-full bg-[#D9D9D9]">

                </div>
                <div className="text-normal">
                purrductive
                </div>
            </Link>
            <div className="min-h-[6.5vh] w-[10px]">

            </div>
        </div>
        <div className="w-[50%] h-full flex flex-col items-end shrink-0">
            <Link to="/savetfp-bakery-cafe" className="w-[98%] mb-[33px] border-black border-2">
                <div className="aspect-[571/368] w-full bg-[#D9D9D9]">

                </div>
                <div className="text-normal">
                savetfp bakery + cafe
                </div>
            </Link>
            <Link to="/readers-note" className="w-[98%] border-black border-2">
                <div className="aspect-[571/368] w-full bg-[#D9D9D9]">

                </div>
                <div className="text-normal">
                [ reader's note ]
                </div>
            </Link>
            <div className="min-h-[6.5vh] w-[10px]">
            
            </div>
        </div>  
    </div>
  );
};


export default Home;