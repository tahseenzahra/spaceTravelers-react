import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex justify-between mt-5 shadow-lg pb-5">
      <img className="ml-20 w-[70px] h-[70px]" src="/planet.png" alt="img" />
      <h1 className="ml-5  mt-2 text-4xl font-bold w-full align-middle">Space Travelers&apos; Hub</h1>
      <div className="w-full flex justify-end">
        <ul className="flex justify-end w-full gap-5 mt-5 mr-10">
          <NavLink className="text-primary font-bold" to="/">Rockets</NavLink>
          <NavLink className="text-primary font-bold" to="mission">Missions</NavLink>
          <NavLink className="text-primary font-bold" to="dragon">Dragons</NavLink>
          <hr className="bg-secondary h-6 w-px" />
          <NavLink className="text-primary font-bold" to="/profile">My Profile</NavLink>
        </ul>
      </div>
    </div>
  );
}
