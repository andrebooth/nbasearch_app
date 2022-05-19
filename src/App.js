

import React from 'react'
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Home from './Components/Home';
import NbaPlayers from './Components/NbaPlayers'
import Footer from './Components/Footer';
import Form from './Components/Form';



import {BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';




function App() {
 
return (
  <Router>
      <div className="App">
        {/* check on this later */}
        {/* <Nav/> */} 

        <nav>
        <Link to="/Home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/NBAPlayers">NBA Players</Link>
        </nav>

        <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/NBAPlayers" element={<NbaPlayers/>} /> 
        <Route path="/Home" element={<Home/>} /> 
        </Routes>
        
        {/* <NbaLogo /> */}
        <Footer />
        
       
      
      </div>
  
  </Router>
  );
}

export default App;


