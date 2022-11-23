import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Missions from "../UI/missions";
import { loaded } from "../redux/missions/missionSlice";

export default function Mission() {
  const [isJoined, setJoined] = useState("false");
  const dispatch = useDispatch();
  const { mission } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(loaded());
  }, []);
  const handleJoin = (e) => {
    mission[0].join_mission = true;
  };
  return (
    <ul
      className="mission-container"
      id="missionList"
    >
      <li className="mission-header">
        <h3 className="mission-column">Mission</h3>
        <h3 className="description-column">Description</h3>
        <h3 className="status-column">Status</h3>
        <div className="join-column" />
      </li>
      {mission.map((mission) => (
        <Missions
          key={Math.random()}
          mission={mission.mission_name}
          description={mission.description}
          status={isJoined ? "not a member" : "Active Member"}
          statusStyle={isJoined ? "member-status inactive-member" : "member-status active-member"}
          buttonTag={isJoined ? "Join Mission" : "Leave Mission"}
          id={mission.mission_id}
          className={isJoined ? "mission-btn join-btn" : "mission-btn leave-btn"}
          event={(e) => {handleJoin(e)}}
        />
      ))}
    </ul>
  );
}
