import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    alert("I am Clicked");
  }
  function handleonMouseOver(){
    alert("Para k upar")
  }

  function handleInputChange(e){
    console.log("Input me Value change hui hai", e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    // i am writing my custom behaviour down
    alert("Form Submit krsu kya")
  }

  return (
   <div>

    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button type="submit">submit</button>
    </form>

    {/* <p onMouseOver={handleonMouseOver} style={{color: "red",
      border: "1px solid black"
    }}>
        I am a para
    </p>
    <button onClick={handleClick}>
      Click Me
    </button> */}
   </div>
  )
}

export default App
