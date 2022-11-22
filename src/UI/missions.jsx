import React from 'react';
import Button from './button';

export default function Missions({
  mission, description, membership, membershipStyle, buttonTag, id, className, event 
}) {
  return (
    <li className="flex even:bg-gray-100">
        <div className="w-1/1 p-2 border font-bold">{mission}</div>
        <div className="w-5/7 p-2 border text-sm font-medium">
          {description}
        </div>
        <div className="
          flex
          justify-center
          items-center
          w-1/1
          p-2 border"
        >
          <div className={membershipStyle}
          >
            {membership}
          </div>
        </div>
        <div className="flex justify-center w-1/1 p-2 border">
          <Button
            title={buttonTag}
            id={id}
            className={className}
            onClick={event}
          />
        </div>
      </li>
  );
}
