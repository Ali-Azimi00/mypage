import React, { useEffect, useState } from 'react';
import '../App.css';
import './About.css';
import pic from '../Images/smlAli.PNG'
import { useTypewriter, Cursor} from 'react-simple-typewriter'


function About(){
 
    let [currentWidth,setCurrentWidth] = useState(window.innerWidth)
    let [btnLocation,setBtnLocation]= useState({marginTop:"40%", color:"white", fontSize:"2vh"})
  
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
 
    useEffect(()=>{
        setCurrentWidth((prevState)=>{
            let pd = {...prevState}
            pd = window.innerWidth
            return pd
        })

        if(750<currentWidth && currentWidth <1000){
            setBtnLocation((prevState)=>{
                let pd={...prevState}
                pd.marginTop = "50%"
                pd.fontSize="2vh"
                return pd
            })
            console.log("under 1000",window.innerWidth)
        }
        else if(currentWidth>1200) {
            setBtnLocation((prevState)=>{
                let pd={...prevState}
                pd.marginTop = "45%"
                return pd
            })
            console.log("over 1200",window.innerWidth)
        }
        else if(550<currentWidth && currentWidth<750) {
            setBtnLocation((prevState)=>{
                let pd={...prevState}
                pd.marginTop = "52%"
                pd.fontSize="1.5vh"
                return pd
            })
            console.log("under 750",window.innerWidth)
        }     
        else if(currentWidth<550) {
            setBtnLocation((prevState)=>{
                let pd={...prevState}
                pd.marginTop = "60%"
                pd.fontSize="1vh"
                return pd
            })
            console.log("under 550",window.innerWidth)
        }     
      
    },[window.innerWidth])

    
return (
    <div name="about" className='AboutCard '>
        <div className="picText">
            <div>
                <img src={pic} className="leftPicture " alt="..."/>
            </div>
          
            <p className="AboutText">
                {text}<Cursor cursorStyle='_'/>
            </p>          
        </div>
    <button className="AboutBtn AboutBtnPosition"
    style={btnLocation}
    >Click
            </button>        
    </div>
);
}

export default About