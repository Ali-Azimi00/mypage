import React from 'react'
import logo from './logo.svg';
import './App.css';
import ParticlesBg from 'particles-bg'
// import Zoom from 'react-reveal/Zoom'
import About from './Components/About'
import { Link, animateScroll as scroll } from "react-scroll";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



function App() {

  let helloMessage =()=>{
      console.log("hi")
  }

  // let config = {
  //   color="#080707";
  //   num={150};
  //   type="lines";
  //   bg={true};
  //   position="absolute";
  // }



  return (
    <React.Fragment>
    

  <Container> 
    <ParticlesBg  
        type="lines"
        num= {250}
        bg={true}
        color="#080707"
        // position="cover" 
      />

    <Row>
      <div className="TitleBlock">
        <h1 className="WelcomeLine1">Hello! My Name is <span className='WelcomeHighlight'>Ali Azimi</span></h1>
        <h1 className='WelcomeLine2'> I am a <span className='WelcomeHighlight'>Full Stack</span> Software Engineer</h1>
        <span className="about GreenButton ButtonPosition"  >
          <Link className="" to="about" smooth={true} duration={1000}> Know More</Link>
        </span>  
      </div>
          
    </Row>

    <Row>
         <About name=""></About>
    </Row>
   
  </Container>

      





      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div> 
               <button onClick={helloMessage}>Hello</button>
          </div>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </React.Fragment>
    
  );
}

export default App;
