import React from "react";
import { Outlet, Link } from "react-router-dom";

import '../../index.css';

import moonwrap from "./landingpics/moonwrap.png";
import savetfp from "./landingpics/savetfp.png";
import purrductive from "./landingpics/purrductive.png";
import readersnote from "./landingpics/readersnote.png";

// switch to woff + wait until everything loaded

const Home = () => {
  return (
    <div className="mt-[6.5vh] h-auto w-[76.7vw] font-regular flex flex-row justify-between">
        <div className="w-[50%] h-auto flex flex-col shrink-0">
            <Link to="/savetfp-bakery-cafe" className="w-[98%] mb-[28px]">
                <img className="aspect-[571/368] w-full" src={savetfp}/>
                <div className="flex flex-col flex-shrink-0">
                    <div className="text-normal mt-[2px]">
                        savetfp bakery + cafe
                    </div>
                    <div className="text-small mt-[-3px]">
                        print, visual design
                    </div>
                </div>
            </Link>

            <Link to="/moonwrap" className="w-[98%] mb-[28px]">
                <img className="aspect-[571/368] w-full" src={moonwrap}/>
                <div className="flex flex-col flex-shrink-0">
                    <div className="text-normal mt-[2px]">
                        moonwrap
                    </div>
                    <div className="text-small mt-[-3px]">
                        web, ui/ux, concept design
                    </div>
                </div>
            </Link>

            
            
            
            
            <Link to="/purrductive" className="w-[98%]">
                <img className="aspect-[571/368] w-full" src={purrductive}/>
                <div className="flex flex-col flex-shrink-0">
                    <div className="text-normal mt-[2px]">
                        purrductive
                    </div>
                    <div className="text-small mt-[-3px]">
                        full stack web, ui/ux
                    </div>
                </div>
            </Link>
            <div className="min-h-[6.5vh] w-[10px]">

            </div>
        </div>
        <div className="w-[50%] h-full flex flex-col items-end shrink-0">
            <Link to="/scar" className="w-[98%] mb-[28px]">
                <img className="aspect-[571/368] w-full" src={savetfp}/>
                <div className="flex flex-col flex-shrink-0">
                    <div className="text-normal mt-[2px]">
                        scar
                    </div>
                    <div className="text-small mt-[-3px]">
                        fabrication, interaction design
                    </div>
                </div>
            </Link>

            <Link to="/memory-loops" className="w-[98%] mb-[28px]">
                <img className="aspect-[571/368] w-full" src={savetfp}/>
                <div className="flex flex-col flex-shrink-0">
                    <div className="text-normal mt-[2px]">
                        memory loops
                    </div>
                    <div className="text-small mt-[-3px]">
                        photo
                    </div>
                </div>
            </Link>

            
            
            <Link to="/readers-note" className="w-[98%]">
                <img className="aspect-[571/368] w-full" src={readersnote}/>
                <div className="flex flex-col flex-shrink-0">
                    <div className="text-normal mt-[2px]">
                        [ reader's note ]
                    </div>
                    <div className="text-small mt-[-3px]">
                        print, visual + concept design
                    </div>
                </div>
                
            </Link>
            
            <div className="min-h-[6.5vh] w-[10px]">
            
            </div>
        </div>  
    </div>
  );
};


export default Home;