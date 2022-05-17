import React from 'react'
import Form from './Form';
import {useState, useEffect } from 'react'


function NbaPlayers () {

  const [searchPlayer, setSearchPlayer] = useState("");
  
  const [playerList, setPlayerList]= useState(null)

      useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/players?search=lebron")
        .then(res => res.json())
        .then(data => console.log(data))
      }, [])

     
     
    let playerDisplay = ""
   
   if(playerList !== null)
    playerDisplay = (
      <div>
        <h2>Name { }</h2>
      </div>
    )

    return (
      
      <div>
        <h2>NBA Players</h2>
        <Form />
       

        
       </div>
      

    )
  }
  
  export default NbaPlayers;
  