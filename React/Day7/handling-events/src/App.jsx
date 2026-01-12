import { useState } from 'react'

import './App.css'

function App() {
  // const[name, setName] = useState("Aniket")
  const [form, setForm] = useState({
    email: '',
    phone: ''
  })
      

  const HandleClick = () => {
    alert('Button Clicked!')
  }

  const HandleMouseOver = () => {
    alert('Mouse Over Event Triggered!')
  }

  const handleChange = (event) => {
    // setName(event.target.value)
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
    console.log(form);
  }

  return (
    <>
      <div className='button'>
        <button onClick={HandleClick}>Click Me</button>
      </div>

      <div className="red" onMouseOver={HandleMouseOver}>I am a red dev</div>

      <input type="text" name="email" value={form.email} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone} onChange={handleChange}/>
    </>
  )
}

export default App
