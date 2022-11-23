import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchDragons,
  DragonStatus,
} from '../Redux/dragon/dragonSlice';
import Button from '../UI/button';

export default function Dragon() {
  const { dragon } = useSelector((state) => state.dragons);
  const { status } = useSelector((state) => state.dragons);
  const [reserve, setReserve] = useState('')

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const handeleReserve  = () => {
    console.log('gggg')
    setReserve(reserve === ''?'reserve' : '')
  }

console.log(reserve)
  return (
    <>
    {dragon === '' ? <>loading</> : <> {dragon.map((dra) =>{<>{dra.description}</>})}</> }

      {dragon.map((dra, i) => (
        <div key={i} className='flex mt-20 mx-5'>
          <img className='h-[150px] w-[150px]' src={dra.flickr_images[0]} alt="planet" />
          <div className='ml-5'>
            <h2>{dra.name}</h2>
            
            <p> <span className='bg-primary'>{reserve === '' ? <></> : 'reserved'}</span> {dra.description}</p>
            <Button className= {reserve === '' ? '' :"p-2 bg-blue-500"} Event = {handeleReserve} title={reserve === "" ?'Reserve Dragon' : 'cancelReservation'} />
          </div>
        </div>
      ))}

    </>

  );
}
