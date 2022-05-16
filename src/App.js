import React from 'react'
import './App.css';
import Form from './Components/Form'
import Link from 'react-router-dom'


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
      <Form/>


      
     
    </div>
  );
}

export default App;
