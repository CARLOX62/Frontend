import React from 'react'
import aniketImage from '../assets/aniket.jpg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='container' style={props.style}>
        <h2>User Card Component</h2>
        <p>This is a simple user card component.</p>
        <p className='user_name'>{props.name}</p>
        <img className='user_img' src={aniketImage} alt="aniketImage" />
        <p className='user_disc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
