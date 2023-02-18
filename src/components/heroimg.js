import "../css/heroimageStyle.css"; 
import React from 'react'
import Hero from "../assets/intro.png";
const Heroimage = () => {
   
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={Hero} alt="IntroImg"/>
        </div>
      <div className="content-hero">
        
        <h1>Welcome to Scrapper Application </h1>
        
        
      </div>
      
    </div>
  )
}

export default Heroimage
