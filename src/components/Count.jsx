
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice';

const Count = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [number ,setNumber] = useState('100')

  const heandelPlayLode =()=>{
    dispatch(incrementByAmount(parseInt(number)))
  }


  const heandelIncrement = () => {
    dispatch(increment())
  }

  const heandeDecrement = () => {
    dispatch(decrement())
  }
  return (
    <>
      <h1 className=' text-center mt-9 text-xl font-medium'>{count}</h1>
      <div className=' flex justify-center mt-20 items-center'>
        <input type="text" onChange={(e)=>setNumber(e.target.value)} placeholder='Amount' className=' py-2 px-3 w-20 border' />
        <button className=' py-2 px-4 bg-orange-500 border-none m-2' onClick={heandelPlayLode}>Amount</button>
        <button className=' py-2 px-4 bg-orange-500 border-none m-2' onClick={heandelIncrement}>Increment</button>
        <button className=' py-2 px-4 bg-orange-500 border-none' onClick={heandeDecrement}>Decrement</button>
      </div>
    </>
  );
};

export default Count;