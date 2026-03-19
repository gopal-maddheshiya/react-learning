import React from 'react'

const Card = (props) => {
  return (
  <div className="card">
          <img src={props.img} alt="" />
          <h1>{props.user} | {props.age}</h1>
          <p>MERN Stack Developer | DSA with JAVA | Internship Seeking</p>
          <button>View Profile</button>
        </div>
  )
}

export default Card
