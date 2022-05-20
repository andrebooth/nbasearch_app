import React from 'react'
import image from "./nba-logo-transparent.png";
import Heat from "./Heat.png";
import Warriors from "./Warriors.png";
import Celtics from "./Celtics.png";
import Mavericks from "./Mavericks.png";


function Home() {
    return (
        <>
        
        <img className="Heat"src={Heat} alt = "Heat Logo" />
              <img className="Celtics"src={Celtics} alt = "Celtics Logo" />
              <img className="nba_logo"src={image} alt = "NBA Logo" />
              <img className="Warriors"src={Warriors} alt = "Warriors Logo" />
              <img className="Mavericks"src={Mavericks} alt = "Mavericks Logo" />
              <h2>Welcome, Click on the NBA Players Link in the header to get started.</h2>
        </>
    )
    
    
  }
  export default Home;