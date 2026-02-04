import './App.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from "./Features/counter/counterslice"

function App() {
  
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleAdd(){
    dispatch(increment());
  }

  function handleSub(){
    dispatch(decrement());
  }

  function handleReset(){
    dispatch(reset());
  }

  function handleAddamountClick(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='countainer'>
      <button onClick={handleAdd}> + </button>
      <p>Count: {count}</p>
      <button onClick={handleSub}> - </button>
      <button onClick={handleReset}>Reset</button>

      <input type="number" placeholder='enter amount' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <br />
      <button onClick={handleAddamountClick}>Inc by Amount</button>
    </div>
  )
}

export default App
