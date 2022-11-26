import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const rocketsData = useSelector((state) => state.rockets);
  const { dragon } = useSelector((state) => state.dragons);
  const { missions } = useSelector((state) => state.mission);

  const rocketProfile = rocketsData.filter((rocket) => rocket.reserve === true);
  const dragonProfile = dragon.filter((dra) => dra.reservation === true)
  const missionProfile = missions.filter((mission) => mission.isJoined === true)

  
  return (
    <div className='flex justify-between px-40'>
      <div>
        <table className='table-fixed mt-5 ml-5'>
          <thead>
            <tr>
              <th className='text-2xl'>Rockets</th>
            </tr>
          </thead>
          <tbody>
            {rocketProfile.map((rocket) => (
              <tr>
                <td className='border-solid border-2 border-grey-300 p-3 w-[500px]'>
                  {rocket.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <table className='table-fixed mt-5 ml-5'>
          <thead>
            <tr>
              <th className='text-2xl'>Mission</th>
            </tr>
          </thead>
          <tbody>
              {missionProfile.map((mission, i) => (
            <tr key={i}>
              <td className='border-solid border-2 border-grey-300 p-3 w-[500px]'>
                {mission.name}
              </td>
            </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div>
        <table className='table-fixed mt-5 ml-5'>
          <thead>
            <tr>
              <th className='text-2xl'>Dragon</th>
            </tr>
          </thead>
          <tbody>
            {dragonProfile.map((dra, i) => (
              <tr key={i}>
                <td className='border-solid border-2 border-grey-300 p-3 w-[500px]'>
                  {dra.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
