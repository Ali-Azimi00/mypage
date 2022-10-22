import React, { useState,useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import ParticlesBg from 'particles-bg'
// import Zoom from 'react-reveal/Zoom'
import About from './Components/About'
import Welcome from './Components/Welcome'
import { Link } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import { animated , useSpring } from '@react-spring/web';

function App() {
  
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  useEffect(()=>{
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
   
    return ()=>{
      window.removeEventListener('resize', handleWindowResize); 
    }

  },[])

  return (
  <React.Fragment>
   

    <Container className= "container"> 
      <Welcome></Welcome>
    </Container>

  <Container className= "AboutCard AboutText"> 
    <About></About>
    </Container>

    </React.Fragment>
    
  );
}

export default App;
