import React from "react";
import { Link } from "react-router";
import '../../../index.css';

const ReadersNote = () => {
  return (
    <div className="h-[200vh] w-[76.7vw] mt-[6.5vh] border-black border-2">
        <Link to="/">back to home </Link>
        <div className="text-normal">
          reader's note
        </div>
    </div>
  );
};


export default ReadersNote;