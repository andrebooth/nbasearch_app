

import React from 'react'
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import NbaPlayers from './Components/NbaPlayers';
import Form from './Components/Form';
import {BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';




function App() {
 
return (
  <Router>
      <div className="App">
        {/* check on this later */}
        {/* <Nav/> */} 

        <nav>
        <Link to="/about">About</Link>
        <Link to="/NBAPlayers">NBA Players</Link>
        </nav>

        <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/NBAPlayers" element={<NbaPlayers/>} /> 
        </Routes>
        
       
      
      </div>
  
  </Router>
  );
}

export default App;


