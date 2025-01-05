import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";

import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js"
import Navbar from "./components/modules/Navbar.js";

import Moonwrap from "./components/pages/work/Moonwrap.js";
import SaveTFPCafe from "./components/pages/work/SaveTFPCafe.js";
import Purrductive from "./components/pages/work/Purrductive.js";
import ReadersNote from "./components/pages/work/ReadersNote.js";




import './App.css';

function App() {
  const { pathname } = useLocation();
  const scrollPosition = useRef(window.scrollY);

  ReactGA.initialize("G-QJ0FL104XV");

  useEffect(() => {
    ReactGA.send({ 
      hitType: 'pageview', 
      page: pathname
    });
  }, []);

  useEffect(() => {
    ReactGA.send({ 
      hitType: 'pageview', 
      page: pathname
    });
  }, [pathname]);

  // need to remember scroll position on home page
  useEffect(() => {
    if (pathname != "/") {
      //console.log(pathname);
      scrollPosition.current = window.scrollY;
      //console.log(window.scrollY);
      window.scrollTo(0, 0);
    }
    else {
      //console.log("...");
      window.scrollTo(0, scrollPosition.current);
    }
  }, [pathname]);

  

  // navbar border doesn't match left gutter when width is small
  return (
    <div className="w-[93vw] h-auto flex justify-end items-start">
      <Navbar/>
      <div className="h-[87vh] w-[14.2vw] mr-[2.4vw]">

      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/moonwrap" element={<Moonwrap/>}/>
        <Route path="/savetfp-bakery-cafe" element={<SaveTFPCafe/>}/>
        <Route path="/purrductive" element={<Purrductive/>}/>
        <Route path="/readers-note" element={<ReadersNote/>}/>
      </Routes>
    </div>
  );
}

export default App;
