import React from "react";

function Nav() {
  return (
    <div>
      <nav className=" flex mx-auto w-11/12 justify-between items-center py-4">
        <div className="text-4xl font-extrabold">
          <h1>P-Ticket</h1>
        </div>

        <div className="flex space-x-16 hidden md:block">
          <a className="font-medium hover:font-bold" href="">
            Home
          </a>
          <a className="font-medium hover:font-bold" href="">
            About
          </a>
          <a className="font-medium hover:font-bold" href="">
            Destination
          </a>
          <a className="font-medium hover:font-bold" href="">
            Search
          </a>
        </div>

        <div>
          <button className="btn px-10 text-xl">Bus</button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
