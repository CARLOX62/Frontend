import React from 'react'
import { useContext } from 'react';
import {UserContext} from '../App.jsx'  // Step4: Import the UserContext

const ChildC = () => {
    // Step5: Consume the user data using useContext hook
    const user = useContext(UserContext);
  return (
    <div>
      Hello {user.name}, Your email is {user.email}
    </div>
  )
}

export default ChildC
