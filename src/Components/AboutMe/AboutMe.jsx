import React from 'react'
import MyPicture from '../../images/mypic.png'
import '../../Styling/AboutMe.scss'

const AboutMe = () => {
  return (
    <>
      <div className="AboutMe">
        <div className="AboutMe-info">
          <h1>I am a<br /><span> Web Developer</span></h1>
          <p>I currently hold the role of a Frontend Developer while concurrently pursuing a degree in Computer Science to expand my expertise in the ever-evolving field of technology.</p>
          <button>Contact Me</button>
        </div>
        <div className="AboutMe-img">
          <img src={MyPicture} alt="" />
        </div>
      </div>
    </>
  )
}

export default AboutMe
