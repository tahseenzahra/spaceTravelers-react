import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Missions from "../UI/missions";
import { loaded } from "../redux/missions/missionSlice";

export default function Mission() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);
  useEffect(() => {
    dispatch(loaded());
  }, []);
  console.log(missions);
  const activeMember =
    "bg-primary px-1 text-font place-content-center rounded font-semibold";
  const inactiveMember =
    "bg-secondary px-1 text-font uppercase place-content-center rounded font-semibold";
  //const joinStyle =
  //  "bg-transparent border-2 rounded p-2 text-secondary font-semibold text-sm";
  //const leaveStyle =
  //  "bg-transparent border-2 border-alert rounded px-2 py-0 text-alert font-semibold text-sm";
  //const joinTag = 'Join Mission';
  //const leaveTag = 'Leave Mission';
  //const member = 'Active Member';
  //const notMember = 'not a member';
  return (
    <ul
      className='flex-col mt-4 mx-8'
      id='missionList'
    >
      <li className='flex justify-between font-bold even:bg-gray-100'>
        <h3 className='w-1/1 p-2 border'>Mission</h3>
        <h3 className='w-5/7 p-2 border'>Description</h3>
        <h3 className='w-1/1 p-2 border'>Status</h3>
        <div className='w-1/1 border' />
      </li>
      {missions.map((mission) => (
        <Missions
        mission={mission.mission_name}
        description={mission.description}
        status={notMember}
        statusStyle={inactiveMember}
        buttonTag={joinTag}
        id={mission.mission_id}
        className={joinStyle}
        event={activeMember}
        />
      ))}
    </ul>
  );
}
