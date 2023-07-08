import React from 'react'
import mt from "../images2/mountain.png";
import cl from "../images2/cloud.png";
import girl from "../images2/girl.png";
const Header = () => {
  
  return (
    <div>
    
      <div>
    <img className="top-cloud" src={cl}alt="cloud.img"></img>
    <h1> I'm Himani.</h1>
    <h2>A learner.</h2>
    <img class="bottom-cloud" src={cl} alt="cloud.img"></img>
    <img src={mt} alt="mountain.img"></img>
  </div>
  <div class="middle-container">
    <div class="profile">
      <img class="pfp" src={girl} alt="profile.img"></img>
      <h2>Hello.</h2>
      <p class="intro">I love to play with fonts and colors.</p>
    </div>
    <hr></hr>
    <div class="skills">
      <h1>My Skills.</h1>
      </div>
    </div></div>
  )
}

export default Header
