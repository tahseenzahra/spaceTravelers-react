import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchDragons,
  DragonStatus,
} from '../Redux/dragon/dragonSlice';
import Button from '../UI/button';

export default function Dragon() {
  const { dragon } = useSelector((state) => state.dragons);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const handeleReserve  = (id) => {
    dispatch(DragonStatus(id))
  }

  return (
    <>
      {dragon.map((dra, i) => (
        <div key={i} className='flex mt-20 mx-5'>
          <img className='h-[150px] w-[150px]' src={dra.flickr_images[0]} alt="planet" />
          <div className='ml-5'>
            <h1 className='font-bold'>{dra.name}</h1>
            <p> <span className='bg-primary'>{dra.reservation === false ? <></> : 'reserved'}</span> {dra.description}</p>
            <Button className= {dra.reservation === false ? "p-2 bg-blue-600 text-font" :'text-secondary border-solid border-2 border-grey-600 p-2'} Event = {() => handeleReserve(dra.id)} title={dra.reservation === false ?'Reserve Dragon' : 'cancelReservation'} />
          </div>
        </div>
      ))}

    </>

  );
}
