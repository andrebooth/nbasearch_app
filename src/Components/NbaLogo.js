import React from 'react'
import image from "./nba-logo-transparent.png";

function NbaLogo() {
  return (
    <div>
        <img className="nba_logo"src={image} alt = "NBA Logo" />
    </div>
  )
}
export default NbaLogo