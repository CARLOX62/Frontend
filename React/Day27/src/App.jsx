import './App.css'
import { useState } from 'react'
import childComponents from './Components/childComponents.js'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // function handleClick() {
  //   setCount(count + 1)
  // }

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])


  return (
    <div>
      <div>
        Count: {count}
      </div>
      <div>
      <button onClick={handleClick}>
        Increment
      </button>
      </div>
      <br />
      <br />
      <div>
        <childComponents.js buttonName="Click Me"
        handleClick = {handleClick} />
      </div>
    </div>
  )
}

export default App
