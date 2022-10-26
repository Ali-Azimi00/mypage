import React from 'react';
import '../App.css';
import './About.css';
import pic from '../Images/smlAli.PNG'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

function About(){

    let  paragraph1 = "I'm a driven full-stack software engineer who enjoys making dynamic and interactive front-end designs. Along with extensive experience in React, I have professional experience using .NET/C# and SQL frameworks."

    const [text] = useTypewriter({
        words: [" ", "About Me", paragraph1],
        cursor:true,
        cursorType: "I",
        typeSpeed:50,
        deleteSpeed:40,
        delaySpeed: 2500,
        // Infinit
    })
    
return (
    <div name="about" className='AboutCard'>
        <div className="picText">
            <div>
                <img src={pic} className="leftPicture " alt="..."/>
            </div>
            <p className="AboutText">
                {text}<Cursor cursorStyle='_'/>
            </p>
            {/* <button className="AboutButton GreenButton">click me</button> */}

        </div>
         

    </div>
    

);
}


export default About