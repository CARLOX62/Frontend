import React from 'react'

const Card = (props) => {
  return (
    <div>
      {props.nmae}<br/>
      {props.age}<br/>
      {props.profession}
      {props.children}
    </div>
  )
}

export default Card
