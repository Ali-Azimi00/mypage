import React from 'react';
// import logo from './logo.svg';
import '../App.css';
import './styles/About.css';
import ResumePdf from "../Pdf/AliAzimi-Software_Engineer.pdf"

function BtnPage (props){

    const onResumeClick = () => {
        window.open(ResumePdf);
    };

    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/ali-azimi-software-engineer/");
    };

    let changeState =()=>{
        props.setModalState((prevState)=>{
            let pd= {...prevState}
            pd = true
            return pd
        })
    }   
   
    return(
        <React.Fragment>
            <div className="img" onClick={onResumeClick}>
                Resume
            </div>
            
            <div className="img" onClick={openLinkedIn}>
                LinkedIn
            </div>

            <div type="button" className="img" onClick={changeState}>
                Contact
            </div>        
        </React.Fragment>
    )
}

export default BtnPage