import { useState } from 'react'
import Button from './Components/Button.jsx'
import Card from './Components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    alert('App Button Clicked!')
    setCount(count + 1)
  }
  

  return (
    <div>
      <Button handleClick={handleClick} text="Click me"> 
        <h1>{count}</h1>
      </Button>
      {/* <Card name = "John Doe" age={30} profession="Engineer">
        <h1>My name is aniket</h1>
        <p>Trying to be consistent in this</p>
        <p> Will complete the dcourse soon</p>
      </Card>
       <Card
        name="Jane Smith"
        age={28}
        profession="Designer"
      >
        <h1>My name is aniket</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon</p>
      </Card>*/}
    </div>
  )
}

export default App
