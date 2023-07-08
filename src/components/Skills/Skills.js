import React from 'react'
import Webdskills from './Webdskills';
import ux from "../images2/ux.png";


const Skills = () => {
  return (
    <div>
    <div class="skill-row">
        
       
    <img class="codepic" src={ux} alt="comp.img"></img>
       <h2>Web Development</h2>
        <p>The idea of beautiful websites being coded fascinates me everyday.</p>
        </div>

        <Webdskills />
    </div>


  )
}

export default Skills
