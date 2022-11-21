import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex justify-between mt-5 shadow-lg pb-5">
      <img className="ml-20 w-[70px] h-[70px]" src="/planet.png" alt="img" />
      <h1 className="ml-5  mt-2 text-4xl font-bold w-full align-middle">Space Travelers Hub</h1>
      <div className="w-full flex justify-end">
        <ul className="flex justify-end w-full gap-5 mt-5 mr-10">
          <NavLink className="text-blue-400 font-bold" to="/">Rockets</NavLink>
          <NavLink className="text-blue-400 font-bold" to="mission">Mission</NavLink>
          <NavLink className="text-blue-400 font-bold" to="dragon">Dragon</NavLink>
          <NavLink className="border-l-2 px-5 h-[70%] border-indigo-500 text-blue-400 font-bold" to="/profile">profile</NavLink>
        </ul>
      </div>
    </div>
  );
}
