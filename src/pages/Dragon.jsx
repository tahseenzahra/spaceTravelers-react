import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Dragon() {
  const rockets = useSelector((state) => state.dragons);

  console.log(rockets)

  return (
    <div>
      <h1>Dragon</h1>
    </div>
  );
}
