import { useState, useRef } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // let val = useRef(1);

  // let btnref = useRef();

  // function handleIncrement() {
  //   val.current = val.current + 1 
  //   console.log("val:", val.current)
  //   setCount(count + 1)
  // }

  // function changeColor() {
  //   btnref.current.style.backgroundColor = 
  //     `rgb(${Math.floor(Math.random() * 256)}, 
  //          ${Math.floor(Math.random() * 256)}, 
  //          ${Math.floor(Math.random() * 256)})`
  // }

  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    if (timerRef.current !== null) return; // Prevent multiple intervals

    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  function stopTimer() {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div>
       <h1>StopWatch:{time} seconds</h1>
       <button onClick={startTimer}>
        Start
       </button>
       <br />

       <button onClick={stopTimer}>
        Stop
       </button>
        <br />
        <button onClick={resetTimer}> 
        Reset
        </button>
        <br />

      {/* <button ref={btnref}
       onClick={handleIncrement}>
        Increment
      </button>
    <br />
    
    <button>
      Current ref value: {val.current}
    </button>
    <br />

    <button onClick={changeColor}>
      Change Color
    </button> */}

  

    {/* <div>
      count is: {count}
    </div> */}
    </div>

  )
}

export default App
