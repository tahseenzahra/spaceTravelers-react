// eslint-disable-next-line react/prop-types

import React from 'react';

export default function Button(
  {
    buttonTag, id, className, event 
  }
)
{
  return (
    <button id={id} className={className} onClick={event} type="button">
      {buttonTag}
    </button>
  );
}
