import React from 'react';
import Missions from '../UI/missions';

export default function Mission() {
  const activeMember =
    'bg-primary px-1 text-font place-content-center rounded font-semibold';
  const inactiveMember =
    'bg-secondary px-1 text-font uppercase place-content-center rounded font-semibold';
  const joinStyle = 'bg-transparent border-2 rounded p-2 text-secondary font-semibold text-sm';
  const leaveStyle = 'bg-transparent border-2 border-alert rounded px-2 py-0 text-alert font-semibold text-sm';
  return (
    <ul className="flex-col mt-4 mx-8" id="missionList">
      <li className="flex justify-between font-bold even:bg-gray-100">
        <h3 className="w-1/1 p-2 border">Mission</h3>
        <h3 className="w-5/7 p-2 border">Description</h3>
        <h3 className="w-1/1 p-2 border">Status</h3>
        <div className="w-1/1 border" />
      </li>
      <Missions
        mission={activeMember}
        description={activeMember}
        membership={activeMember}
        memebershipStyle={activeMember}
        buttonTag={activeMember}
        id={activeMember}
        className={activeMember}
        event={activeMember}
      />
    </ul>
  );
}
