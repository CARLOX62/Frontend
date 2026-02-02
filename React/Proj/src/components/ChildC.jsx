import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App.jsx'

const ChildC = () => {

    const theme = useContext(ThemeContext)


  return (
    <div>
        <h2>Child C Component</h2>
        <p>Current Theme from Context: {theme}</p>
    </div>
  )
}

export default ChildC
