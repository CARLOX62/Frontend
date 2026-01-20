import React from 'react'
import UserCard from './components/UserCard'


function App() {

  return (
    <>
      <div>
        <UserCard name="Aniket" desc="Software Developer" style={{"border-radius":"10px"}}/>
        <UserCard name="Sonu" desc="Data Analyst"/>
        <UserCard name="Rahul" desc="UI/UX Designer"/>
      </div>
    </>
  )
}

export default App
