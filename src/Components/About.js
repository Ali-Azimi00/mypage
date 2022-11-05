import React, { useEffect, useState } from 'react';
import '../App.css';
import '../Components/styles/About.css';
import pic from '../Images/smlAli.PNG'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import BtnDisplay from "./BtnDisplay"

import ContactModal from "./ContactModal"

function About(){
    let [aboutTrans, setAboutTrans] = useState("")
    let [btnDisplay, setBtnDisplay] = useState("")

    let [modalState, setModalState] = useState(false) 
    let [modal, setModal]=useState();

    let  paragraph1 = "I'm a driven full-stack software engineer who enjoys making dynamic and interactive front-end designs. Along with extensive experience in React, I have professional experience using .NET/C# and SQL frameworks"

    const [text] = useTypewriter({
        words: [" ","About_Me",paragraph1],
        cursor:true,
        cursorType: "I",
        typeSpeed:50,
        deleteSpeed:40,
        delaySpeed: 2500,
        // Infinit
    })
 
    const openBtns =()=>{
        setAboutTrans((prevState)=>{
            let pd= {...prevState}
            pd = "bgFadeIn"
            return pd
        }) 

        setBtnDisplay((prevState)=>{
            let pd ={...prevState}
            pd = "btnOpening"
            return pd
        })  
    }

    useEffect(()=>{
       addModal()
       console.log(modalState)
    },[modalState])
    
    let addModal =()=>{
        if(modalState===true){
            setModal((prevState)=>{
               let pd = {...prevState}
               pd = <ContactModal setModalState={setModalState}></ContactModal>
               return pd
            })            
        }
        else{
            setModal((prevState)=>{
                let pd = {...prevState}
                pd = <></>
                return pd
             })  
        }

    }

return (
    <div name="about">
        <div className={`AboutCard center ${aboutTrans}`}>

            <div className="">
                <div className="">
                    <div>
                        <img src={pic} className="profPic" alt="..."/>                   
                    </div>   
                </div>

                <div className="">
                    <div className="AboutText">
                        {text}<Cursor cursorStyle='_'/>
                    </div> 
                </div>

                <div>
                    <button type="button" id="aboutbtn" className="AboutBtn AboutBtnPosition" onClick={openBtns}
                    > Even_More
                    </button> 
                </div>

            <div>
                {modal}
            </div>
            
            </div>
            <div className="box">
                <div className={`circle  ${btnDisplay}`}>
                    <BtnDisplay setModalState={setModalState}></BtnDisplay>        
                </div>                        
            </div>        
        </div> 
    </div>
);
}

export default About