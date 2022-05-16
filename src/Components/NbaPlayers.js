import React from 'react'
import Form from './Form';
import {useState, useEffect } from 'react'

function NbaPlayers () {

  const [nbaList, setNbaList]= useState([])
  
    

  fetch("https://www.balldontlie.io/api/v1/players/")
  .then(res => res.json())
  .then(data => console.log(data))
    

    return (
      <>
        <h2>NBA Players</h2>
        <Form/>
       </>

    )
  }
  
  export default NbaPlayers;
  