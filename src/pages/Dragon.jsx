import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchDragons,
  DragonStatus,
} from '../Redux/dragon/dragonSlice';
import Button from '../UI/button';

export default function Dragon() {
  const { dragon } = useSelector((state) => state.dragons);

  let LocalDragon = []
  
  if (window !== "undefined")
      LocalDragon = JSON.parse(localStorage.getItem("dragon"));

  let dragons = []
  LocalDragon === null ? dragons = dragon : dragons = LocalDragon

    const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(fetchDragons());
    }, []);
 
  const handeleReserve  = (id) => {
    dispatch(DragonStatus(id))
  }

  return (
    <>
      {dragons.map((dra, i) => (
        <div key={i} className='flex px-20 my-10 mr-60 mx-5'>
          <img className='h-[220px] w-[250px]' src={dra.flickr_images[0]} alt="planet" />
          <div className='ml-5'>
            <h1 className='font-bold mb-3 text-2xl'>{dra.name}</h1>
            <p className='mb-3 text-sm font-serif'> {dra.reservation === false ? <></> :<span className='bg-primary rounded-lg px-2 pb-1 mb-4 mr-2'> reserved </span>} {dra.description}</p>
            <Button className= {dra.reservation === false ? "p-2 bg-blue-600 rounded-lg text-font" :'text-secondary rounded-lg border-solid border-2 border-grey-600 p-2'} Event = {() => handeleReserve(dra.id)} title={dra.reservation === false ?'Reserve Dragon' : 'cancelReservation'} />
          </div>
        </div>
      ))}

    </>

  );
}
