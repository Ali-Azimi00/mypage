import React from 'react';
import { Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import { Container } from "react-bootstrap";
// import Zoom from 'react-reveal/Zoom';
import About from './Components/About';
import Welcome from './Components/Welcome';



function App() {
  


  return (
  <React.Fragment>

  <Container className= "container"> 
    <Welcome></Welcome>
  </Container>

  <Container className= "AboutCard AboutText"> 
    <About></About>
  </Container>

  <Container>



  </Container>

    </React.Fragment>
    
  );
}

export default App;
