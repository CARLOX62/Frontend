import React from 'react'

const Card = (props) => {
  return (
    <div>
      {/* {props.name} */}
      <input type="text" onChange={(e)=> props.setName(e.target.value)} />
      <p>Name sate variable ki value inside Card: {props.name}</p>
    </div>
  )
}

export default Card
