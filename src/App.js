import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js"
import Navbar from "./components/modules/Navbar.js";

import Moonwrap from "./components/pages/work/Moonwrap.js";
import SaveTFPCafe from "./components/pages/work/SaveTFPCafe.js";
import Purrductive from "./components/pages/work/Purrductive.js";
import ReadersNote from "./components/pages/work/ReadersNote.js";

import './App.css';

function App() {
  return (
    <div className="w-[93vw] h-screen flex justify-end items-center">
      <Navbar/>
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
