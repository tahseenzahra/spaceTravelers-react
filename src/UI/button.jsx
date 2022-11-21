// eslint-disable-next-line react/prop-types

import React from 'react';

export default function Button(
  {
    title, id, className, Event 
  }
)
{
  return (
    <button id={id} className={className} onClick={Event} type="button">
      {title}
    </button>
  );
}
