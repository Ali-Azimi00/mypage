import React, { useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import ParticlesBg from 'particles-bg'
// import Zoom from 'react-reveal/Zoom'
// import About from './Components/About'
import { Link } from "react-scroll";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { animated , useSpring } from '@react-spring/web';

function App() {


  const [flip, setFlip] = useState({p1:false, p2:false, p3:false})

  const props = useSpring({ 
    to: { x: 0}, 
    from: { x: -1000 } ,
    // to: { opacity: 1 }, 
    // from: { opacity: 0 } ,
    reset: false,
    reverse: flip.p1,
    delay: 2000,
    config:{duration:750, friction:5},
    onRest: () => setFlip(!(flip.p1)),
  })

  const props2 = useSpring({ 
    to: { x: 0}, 
    from: { x: -1000 } ,
    // to: { opacity: 1 }, 
    // from: { opacity: 0 } ,
    reset: false,
    reverse: flip.p2,
    delay: 4500,
    config:{duration:750},
    onRest: () => setFlip(!(flip.p2)),
  })

  const props3 = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    reset: false,
    reverse: flip.p3,
    delay: 6500,
    config:{duration:1500,tension:10, friction: 1000},
   // onRest: () => setFlip(!(flip.p3)),
  })

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

        <animated.div style={props}>
          <h1 className="WelcomeLine1">Hello! My Name is <span className='WelcomeHighlight'>Ali Azimi</span></h1>
        </animated.div>
    
        <animated.div style={props2}>
          <h1 className='WelcomeLine2'> I am a <span className='WelcomeHighlight'>Full Stack</span> Software Engineer</h1> 
        </animated.div>
      
        <animated.div style={props3}>
          <span className="about GreenButton ButtonPosition"  >
            <Link className="" to="about" smooth={true} duration={1000}> Know More</Link>
          </span>
        </animated.div>  

          </div>      
      </Row>

      {/* <Row>
         <About name=""></About>
      </Row> */}
   
    </Container>

    </React.Fragment>
    
  );
}

export default App;
