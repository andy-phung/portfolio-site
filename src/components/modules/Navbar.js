import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="h-[87vh] w-[14.2vw] mr-[2.4vw] border-black border-2 fixed left-[2.25vw] flex flex-col">
    navbar
    <Link to="/"> home </Link>
    <Link to="/about"> about </Link>

    </div>
  );
};


export default Navbar;