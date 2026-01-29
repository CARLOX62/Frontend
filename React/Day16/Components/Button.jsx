import React from 'react'

const Button = (props) => {
  return (
    <div>
      {props.children}   // renders anything passed between <Button>...</Button>
      <button onClick={props.handleClick}>
        {props.text}     // button label from parent
      </button>
    </div>
  )
}


export default Button
