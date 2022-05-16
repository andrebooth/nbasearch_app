import React from 'react'
import './App.css';
import Form from './Components/Form'
import About from './Components/About'
import NbaPlayers from './Components/NbaPlayers'
import { Routes, Route, Link } from "react-router-dom";



function App() {
  fetch("https://www.balldontlie.io/api/v1/players/")
  .then(res => res.json())
  .then(data => console.log(data))
  
  



  return (
    <div className="App">
      <h1>NBA Search Project</h1>

      <nav>
        <Link to= "NbaPlayers" element={<NbaPlayers/>}/>
        <Link to= "/About" element={<About/>}/>
      </nav>

      <Routes>
        <Route path="/NbaPlayers" element={<NbaPlayers/>} />
        <Route path="/About" element={<About/>} /> 
      </Routes>
     
      <Form/>


      
     
    </div>
  );
}

export default App;
