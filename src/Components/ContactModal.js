import React from 'react'

import '../App.css';
import './styles/About.css';
import './styles/ContactModal.css'


function ContactModal (props){

    let changeState =()=>{
        props.setModalState((prevState)=>{
            let pd= {...prevState}
            pd = false
            return pd
        })
    }   

    return(
        <React.Fragment>
            <div className="card gradient">  
                <div className="xMark"
                    onClick={changeState}> 
                    <>X</>
                </div>
                <div className = "textCenter">
                    <div>
                        <strong>Name: </strong><>Ali_Azimi</>
                    </div>
                    <div>
                        <strong>Email: </strong><>alidotazimi@gmail.com</>
                    </div>
                    <div>
                        <strong>Phone: </strong><>213_536_7947</>
                    </div>    
                </div>             
            </div>
        </React.Fragment>
    )
}

export default ContactModal