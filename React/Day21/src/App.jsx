import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA.jsx'

export const UserContext = createContext(); // Step1: Create the UserContext

function App() {

  // Step2: Create a state to hold the user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com"
  })

  // Step3: Provide the user data to the component tree


  return (
   <>
   <UserContext.Provider value={user}>
        <ChildA />
    </UserContext.Provider>
   </>
  )
}

export default App
