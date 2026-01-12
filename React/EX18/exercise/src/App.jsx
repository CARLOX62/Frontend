import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await a.json()
    setCards(data)
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <div className='container'>
        {cards.map((cards)=>{
          return <div className="card">
            <h1>{cards.title}</h1>
            <p>{cards.body}</p>
            <span>By: UserId: {cards.userId} </span>
          </div>
        })}

      </div>
    </>
  )
}

export default App
