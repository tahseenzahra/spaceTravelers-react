import React from 'react';
import Button from '../UI/button';

export default function Mission() {
  const name = 'bg-pink-500';
  return (
    <div>
      <h1>Mission</h1>
      <Button title="button click" id="id" className={name} />
    </div>
  );
}
