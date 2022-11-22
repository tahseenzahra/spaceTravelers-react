import React from 'react';
import Button from '../UI/button';

export default function Mission() {
  const joinStyle = 'bg-transparent border-2 rounded p-2 text-secondary font-semibold text-sm';
  const leaveStyle = 'bg-transparent border-2 border-alert rounded px-2 py-0 text-alert font-semibold text-sm'
  const joinTitle = 'Join Mission';
  const leaveTitle = 'Leave Mission';
  return (
    <ul className="flex-col mt-4 mx-8">
      <div className="kanaderalla">Hala</div>
      <li className="flex justify-between font-bold even:bg-gray-100">
        <h3 className="w-1/1 p-2 border">Mission</h3>
        <h3 className="w-5/7 p-2 border">Description</h3>
        <h3 className="w-1/1 p-2 border">Status</h3>
        <div className="w-1/1 border" />
      </li>
      <li className="flex even:bg-gray-100">
        <div className="w-1/1 p-2 border font-bold">Thaicom</div>
        <div className="w-5/7 p-2 border text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          consequatur eum porro neque, cumque quidem nisi molestias dolor dolore
          assumenda laborum veniam unde ipsa fuga illum aut quo quod maiores.
        </div>
        <div className="
          flex
          justify-center
          items-center
          w-1/1
          p-2 border"
        >
          <div className="
            bg-secondary
            px-1
            text-font
            uppercase
            place-content-center
            rounded
            font-semibold"
          >
            not a memeber
          </div>
        </div>
        <div className="flex justify-center w-1/1 p-2 border">
          <Button
            title={joinTitle}
            id="id"
            className={joinStyle}
          />
        </div>
      </li>
      <li className="flex even:bg-gray-100">
        <div className="w-1/1 p-2 border font-bold">Thaicom</div>
        <div className="w-5/7 p-2 border text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          consequatur eum porro neque, cumque quidem nisi molestias dolor dolore
          assumenda laborum veniam unde ipsa fuga illum aut quo quod maiores.
        </div>
        <div className="
          flex
          justify-center
          items-center
          w-1/1
          p-2 border"
        >
          <div className="
            bg-primary
            px-1
            text-font
            place-content-center
            rounded
            font-semibold"
          >
            Active Member
          </div>
        </div>
        <div className="flex justify-center w-1/1 p-2 border">
          <Button
            title={leaveTitle}
            id="id"
            className={leaveStyle}
          />
        </div>
      </li>
    </ul>
  );
}
