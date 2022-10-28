import React, {useEffect, useState}from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container } from "react-bootstrap";
// import Zoom from 'react-reveal/Zoom';
import About from './Components/About';
import Welcome from './Components/Welcome';
import Last from './Components/LastSect';
import Footer from './Components/NavBar'



function App() {
  
  const [knowMore, setKnowMore] = useState(false)
  const [evenMore,setEvenMore] = useState(false);

  let [aboutSect, setAboutSect] = useState();
  let [welcomeSect, setWelcomeSect] = useState();
  let [lastSect, setLastSect]= useState();



  let addWelcomeCard =()=>{
    setWelcomeSect((prevState)=>{
      let pd ={...prevState}
      pd = <Welcome setKnowMore={setKnowMore} ></Welcome>
      return pd
    })
    console.log("welcoming card", knowMore)
  }
  let removeCards =()=>{
    setTimeout (
      setWelcomeSect((prevState)=>{
        let pd = {...prevState}
        pd = <div></div>
        return pd
      }),2000
    )

    setTimeout(
      setAboutSect((prevState)=>{
        let pd = {...prevState}
        pd = <div></div>
        return pd
      }),4000
    )
  }

  let addAbout = ()=>{
    setAboutSect((prevState)=>{
      let pd = {...prevState}
      pd = <About setEvenMore={setEvenMore}></About>
      return pd
    })
    console.log("about card", evenMore)
  }

  let addLastCard =()=>{
    setLastSect((prevState)=>{
      let pd = {...prevState}
      pd = <Last setEvenMore={setEvenMore}></Last>
      return pd
    })
  }

  
  useEffect(()=>{

    if (knowMore === true){
      console.log("useEffect knowMore", knowMore)
      addAbout()
    }

    if (evenMore===false){
    console.log("useEffect evenMore", evenMore)
    addWelcomeCard()
    }
    else{
      removeCards()
      addLastCard()    
    }

    
  },[knowMore,evenMore])


  console.log("app", evenMore)

  return (
  <React.Fragment>

    <Container className= "container"> 
      {welcomeSect}
      {/* <Welcome setKnowMore={setKnowMore}></Welcome> */}
    </Container>

    <Container className= "container"> 
        {aboutSect}
      {/* <About clicked={knowMore}></About> */}
      
    </Container>

    <Container>
      {lastSect}
      
    </Container>

  </React.Fragment>
    
  );
}

export default App;
