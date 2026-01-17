import React from 'react'
import Components1 from './Components1'

const Buttons = ({count}) => {
  return (
    <div>
      <button><span><Components1 count={count}/>I am a Button </span></button>
    </div>
  )
}

export default Buttons
