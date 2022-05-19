import React from 'react'
import Form from './Form';
import {useState, useEffect } from 'react'
import image from "./nba-logo-transparent.png";





function NbaPlayers () {
  //state for input search term
  const [searchPlayer, setSearchPlayer] = useState('');
  //state for nbaplayers data from api
  const [playerList, setPlayerList] = useState(null);
  //state for message to user
  const [message, setMessage] = useState("");

  const [filteredResults, setFilteredResults] = useState({});

const updateSearchPlayer = (event) => {
  setSearchPlayer(event.target.value)
}
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://www.balldontlie.io/api/v1/players?search=`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      
      // setSearchPlayer('')
      setPlayerList(data.data)
      console.log(searchPlayer)
      if(data.data){
        findPlayers()
        // console.log(findPlayers(searchPlayer))
        
      }
      

      // if(data.error){
      //   setMessage(data.error)
      //   setPlayerList(null)
      // } else {
      //   console.log(data.data)
      //   setPlayerList(data)
      //   setMessage('')
      // }
    })
    .catch(()=> setMessage('Error, Player not on list'))
  }
  let obj

  if(playerList!== null) {
    obj = playerList.filter(data => searchPlayer.toLowerCase() === data.first_name.toLowerCase())
  console.log(obj)
  
  
  }

  const findPlayers = (playerList) => {
    // let obj = playerList.find(data => data.first_name === searchPlayer)
    console.log(playerList)
   
    // setFilteredResults

    //searchby last name filer
  }

  let playerDisplay = ""
      if(playerList!==null){
        playerDisplay = (
            <div>
              <h2>Player Name: {obj[0].first_name} {obj[0].last_name}</h2>
              <h3>Player Position: {obj[0].position}</h3>
              <h3>Player Division: {obj[0].team.division}</h3>
              <h3>Player Team: {obj[0].team.full_name}</h3>
              <h3>Players Conference: {obj[0].team.conference}</h3>
              
            </div>
        )
      }

      return (
      
            <div>
              <img className="nba_logo"src={image} alt = "NBA Logo" />
              <h2>NBA Players</h2>
              <form className="Form" onSubmit={handleSubmit}>
                <label> Search for Player: </label>
                <input onChange={updateSearchPlayer} value={searchPlayer} type='search' placeholder="Search Player"></input>
                <input type="submit" value="Search Player" />
                
                
              </form>
            <p>{message}</p>
            {playerDisplay}
             </div>
            
      
          )



}
export default NbaPlayers














  //  useEffect(() => {
  //       fetch("https://www.balldontlie.io/api/v1/players?search=")
  //       .then(res => res.json())
  //       .then(data => setPlayerList(data.data))

  //     }, [])
  //     console.log(playerList)

  //     let list = playerList.map(item => {
  //       console.log(item)
  //       return (
  //         <div>
  //           <p> {item.first_name} </p>
            
  //         </div>
  //       )
  //   })

  //   const updateSearchPlayer = (event) => {
  //     setSearchPlayer(event.target.value)
  //     console.log(event.target)
  //   }

  //    //how to create data in a list in the past
  

  //   return (
      
  //     <div>
  //       <h2>NBA Players</h2>
  //       <Form  newPlayerSearch={updateSearchPlayer}
  //       searchPlayers={searchPlayer} setSearchPlayers={setSearchPlayer}/>
        
       

  //       {list}
  //      </div>
      

  //   )
  // }
  
  // export default NbaPlayers;
  