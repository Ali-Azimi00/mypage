import React, { useState} from 'react';
import '../App.css';
import ParticlesBg from 'particles-bg'
// import Zoom from 'react-reveal/Zoom'
import { Link } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import { animated , useSpring } from '@react-spring/web';


function Welcome(){
    const [flip, setFlip] = useState({p1:false, p2:false, p3:false})

    const props = useSpring({ 
      to: { y: 0}, 
      from: { y: -1000 } ,
      // to: { opacity: 1 }, 
      // from: { opacity: 0 } ,
      reset: false,
      reverse: flip.p1,
      delay: 0,
      config:{duration:2000, friction:50},
      onRest: () => setFlip(!(flip.p1)),
    })
  
    const props2 = useSpring({ 
      to: { y: 0}, 
      from: { y: 2000 } ,
      // to: { opacity: 1 }, 
      // from: { opacity: 0 } ,
      reset: false,
      reverse: flip.p2,
      delay: 1100,
      config:{duration:2500,friction:50},
      onRest: () => setFlip(!(flip.p2)),
    })
  
    const props3 = useSpring({ 
      to: { opacity: 1 }, 
      from: { opacity: 0 },
      reset: false,
      reverse: flip.p3,
      delay: 4300,
      config:{duration:2000,tension:10, friction: 0},
     // onRest: () => setFlip(!(flip.p3)),
    })


return (
    
    <React.Fragment>
      <div className="zIndex">
      <div className="particles">
         <ParticlesBg  
        type="lines"
        num= {250}
        bg={true}
        color="#080707"
        position="absolute" 
      />
      </div>
      
    <Col> 
      <Row>
        <div className="TitleBlock">

        <animated.div style={props}>
          <h1 className="WelcomeLine1">Hello! My Name is {" "} <span className='WelcomeHighlight'> Ali Azimi</span></h1>
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

    </Col>
      </div>
        
    
    </React.Fragment>
);
}


export default Welcome