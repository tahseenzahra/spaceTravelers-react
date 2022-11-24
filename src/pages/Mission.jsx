import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaded, missionStatus } from "../redux/missions/missionSlice";
import Missions from "../UI/missions";

export default function Mission() {
  const { mission } = useSelector((state) => state.missions);
  
  const dispatch = useDispatch();
  console.log('useeffect');
  useEffect(() => {
    dispatch(loaded());
  }, []);
  const handleJoin = (id) => {
    dispatch(missionStatus(id));
  };
  return (
    <ul
      className='mission-container'
      id='missionList'
    >
      <li className='mission-header'>
        <h3 className='mission-column'>Mission</h3>
        <h3 className='description-column'>Description</h3>
        <h3 className='status-column'>Status</h3>
        <div className='join-column' />
      </li>
      {mission.map((mission) => (
        <Missions
          key={Math.random()}
          mission={mission.mission_name}
          description={mission.description}
          status={mission.join_mission ? "Active Member" : "not a member"}
          statusStyle={
            mission.join_mission
              ? "member-status active-member"
              : "member-status inactive-member"
          }
          buttonTag={mission.join_mission ? "Leave Mission" : "Join Mission"}
          id={mission.mission_id}
          className={
            mission.join_mission
              ? "mission-btn leave-btn"
              : "mission-btn join-btn"
          }
          event={() => handleJoin(mission.mission_id)}
        />
      ))}
    </ul>
  );
}
