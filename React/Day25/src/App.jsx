import { useMemo } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [input, setText] = useState(0)

  function expensivetask(num) {
    console.log('expensive task')
    for (let i = 0; i < 1000000000; i++) {
      num += 1
    }
    return num
  }


  let doubleValue = useMemo(() => expensivetask(input)
  , [input])

  return (
      <div>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        
        <div>
          Count: {count}
        </div>

        <input type="number" placeholder='Enter number' value={input} onChange={(e) => setText(e.target.value)}
          />

        <div>
          Double Count: {doubleValue}
        </div>
      </div>
  )
}

export default App
