import React from 'react';
import '../App.css';
import './About.css';
import { Container, Row, Col } from "react-bootstrap";

function About(){



return (
    <Container name="about" className='AboutCard AboutText'>
        <Row>
            <Col>
            <div className="BioText">
                hi
            </div>
            {/* <img src="\Images\smlAli.PNG" alt="portrait"/> */}
            </Col>
            <Col>
                Hell
            </Col>
        </Row>
    

    </Container>

);
}


export default About