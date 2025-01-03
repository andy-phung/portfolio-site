import React from "react";
import { Link } from "react-router";
import '../../../index.css';

const Moonwrap = () => {
  return (
    <div className="h-[200vh] w-[76.7vw] mt-[6.5vh] border-black border-2">
     <Link to="/">back to home </Link>
     <div className="text-normal">
      moonwrap
     </div>
    </div>
  );
};


export default Moonwrap;