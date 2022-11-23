import React from 'react';
import Button from './button';

export default function Missions({
  mission, description, status, statusStyle, buttonTag, id, className, event,
}) {
  return (
    <li className="mission-item" key={id}>
        <div className="mission-name">{mission}</div>
        <div className="mission-description">
          {description}
        </div>
        <div className="status-container"
        >
          <div className={statusStyle}
          >
            {status}
          </div>
        </div>
        <div className="joinbtn-container">
          <Button
            buttonTag={buttonTag}
            id={id}
            className={className}
            event={event}
          />
        </div>
      </li>
  );
}
