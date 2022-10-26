import React, {useEffect, useState}from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container } from "react-bootstrap";
// import Zoom from 'react-reveal/Zoom';
import About from './Components/About';
import Welcome from './Components/Welcome';



function App() {
  
  const [knowMore, setKnowMore] = useState(false)

  let [aboutSec, setAboutSect] = useState()

  let secondCard = (section)=>{
    setAboutSect((prevState)=>{
      let pd = {...prevState}
      pd = <About></About>
      return pd
    })
  }

  useEffect(()=>{

    if (knowMore === true){
      console.log("useEffect Knowmore", knowMore)
      secondCard(<About></About>)
    }

  },[knowMore])


  console.log("app", knowMore)

  return (
  <React.Fragment>

    <Container className= "container"> 
      <Welcome setKnowMore={setKnowMore}></Welcome>
    </Container>

    <Container className= "container"> 
        {aboutSec}
      {/* <About clicked={knowMore}></About> */}
    </Container>

    <Container>

    </Container>

  </React.Fragment>
    
  );
}

export default App;
