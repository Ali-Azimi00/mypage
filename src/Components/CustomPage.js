import React from 'react'
import '../Components/styles/CustomPage.css';
import '../App.css'
// import ParticlesBg from 'particles-bg'
// import NavBar from './NavBar'
import Skills from './Skills'
import Weather from './Weather/Weather'


function DemoPage (){

    let skillsArr = ["React", "C#",".Net","SQL","JavaScript","HTML5","CSS3","BootStrap","Google_Analytics","RESTful_API","AJAX","Git"]   
    
   
    return(
        <React.Fragment>
           
            {/* <NavBar></NavBar> */}
            <div className="bg-dark">
           

                <div className="box2">
                    <div className='leftSeg'>
                    {/* <div className="skillTitle">
                            hello
                        </div> */}
                        <div className="slider">
                            <Skills skillArr={skillsArr}/>
                        </div>
                        
                                            
                    </div>
                    <div className='rightSeg'>

                        <div className='samples'>          
                             <Weather></Weather>
                        </div>
                        <div className='other'>
                            
                        </div>
                        
                    </div>
                    




                </div>
                
            </div>           
            {/* <div className="particles">
                <ParticlesBg  
                type="cobweb"
                num= {48}
                bg={true}
                color="#ff0000"
                position="absolute" 
            />
            </div>    */}
        </React.Fragment>
    )
}

export default DemoPage