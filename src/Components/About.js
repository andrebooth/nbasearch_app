import React from 'react'
import image from "./nba-logo-transparent.png";
import Heat from "./Heat.png";
import Warriors from "./Warriors.png";
import Celtics from "./Celtics.png";
import Mavericks from "./Mavericks.png";


function About () {
   
    

    return (
     <>
      <img className="Heat"src={Heat} alt = "Heat Logo" />
      <img className="Celtics"src={Celtics} alt = "Celtics Logo" />
      <img className="nba_logo"src={image} alt = "NBA Logo" />
      <img className="Warriors"src={Warriors} alt = "Warriors Logo" />
      <img className="Mavericks"src={Mavericks} alt = "Mavericks Logo" />
    <h3> Everything you need to know about NBA Players and their stats,</h3>
    <h3> This application is an NBA Search Tool to find your favorite NBA players from the past and current seasons</h3>
    
    </>
    )
  }
  
  export default About;
  