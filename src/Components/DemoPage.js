import React from 'react'
import '../Components/styles/DemoPage.css';
// import NavBar from './NavBar'
import Skills from './Skills'


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
                            
                        </div>
                        <div className='other'>
                            
                        </div>
                        
                    </div>
                    




                </div>
            </div>           
        </React.Fragment>
    )
}

export default DemoPage