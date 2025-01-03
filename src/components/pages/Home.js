import React from "react";
import { Outlet, Link } from "react-router-dom";



const Home = () => {
  return (
    <div className="h-[87vh] w-[76.7vw] border-black border-2">
        home
        <Link to="/moonwrap"> moonwrap </Link>
        <Link to="/savetfp-bakery-cafe"> savetfp bakery + cafe </Link>
        <Link to="/purrductive"> purrductive </Link>
        <Link to="/readers-note"> reader's note </Link>
    </div>
  );
};


export default Home;