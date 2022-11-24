import React from 'react';


export default function Profile() {

  let LocalDragon = []
  
  try {
    if (window !== "undefined")
      LocalDragon = JSON.parse(localStorage.getItem("dragon"));
  } catch (e) { }

  const dragonProfile = LocalDragon.filter(dra => dra.reservation === true) || []

  return (
    <div className='flex justify-between px-40'>

      <div>
        <table className="table-fixed mt-5 ml-5">
          <thead>
            <tr>
              <th className="text-2xl">Rockets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-solid border-2 border-grey-300 p-3 w-[500px]">The Sliding</td>
            </tr>
            <tr>
              <td className="border-solid border-2 border-grey-300 p-3 w-[500px]">The Sliding</td>
            </tr>
            <tr>
              <td className="border-solid border-2 border-grey-300 p-3 w-[500px]">The Sliding</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <table className="table-fixed mt-5 ml-5">
          <thead>
            <tr>
              <th className="text-2xl">Mission</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-solid border-2 border-grey-300 p-3 w-[500px]">The Sliding</td>
            </tr>
            <tr>
              <td className="border-solid border-2 border-grey-300 p-3 w-[500px]">The Sliding</td>
            </tr>
            <tr>
              <td className="border-solid border-2 border-grey-300 p-3 w-[500px]">The Sliding</td>
            </tr>
          </tbody>
        </table>
      </div>


      <div>
        <table className="table-fixed mt-5 ml-5">
          <thead>
            <tr>
              <th className="text-2xl">Dragon</th>
            </tr>
          </thead>
          <tbody>
            {dragonProfile.map((dra, i) => (
              <tr key={i}>
                <td className="border-solid border-2 border-grey-300 p-3 w-[500px]">{dra.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
