import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaded, missionStatus } from "../Redux/missions/missionSlice";
import Missions from "../UI/missions";

export default function Mission() {
  const { missions } = useSelector((state) => state.mission);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) {
      dispatch(loaded());
    }
  });

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
      {missions.map((mission) => (
        <Missions
          key={Math.random()}
          mission={mission.name}
          description={mission.description}
          status={mission.isJoined ? "Active Member" : "not a member"}
          statusStyle={
            mission.isJoined
              ? "member-status active-member"
              : "member-status inactive-member"
          }
          buttonTag={mission.isJoined ? "Leave Mission" : "Join Mission"}
          id={mission.id}
          className={
            mission.isJoined ? "mission-btn leave-btn" : "mission-btn join-btn"
          }
          event={() => handleJoin(mission.id)}
        />
      ))}
    </ul>
  );
}
