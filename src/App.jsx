import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';

const App = () => {

  const [amount,setAmount] = useState(0);
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>
       <button onClick={handleIncrementClick}>+</button>
       <p>Count : {count}</p>
       <button onClick={handleDecrementClick}>-</button>
       <button onClick={handleResetClick}>Reset</button><br/><br />
       <input type="number" value={amount} placeholder='Enter Amount' onChange={(e)=>setAmount(e.target.value)}/>
       <button onClick={handleIncAmountClick}>IncrementByAmount</button>
    </div>
  )
}

export default App