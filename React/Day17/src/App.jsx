import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // Create state
  // manage state
  // Change state

  const [name, setName] = useState("")


  return (
   <div>
    <Card name = {name} setName={setName}/>
    <p>I am inside Parent component and value of name is {name}</p>
   </div>
  )
}

export default App
