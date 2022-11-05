import React,{useState} from 'react'


function Skills (props){

    let  [skills, setSkills] = useState([])

    let skillList = props.skillArr
    
    let skillMapper = (data) =>{
        let keys = skillList.findIndex((element)=> element === data)
        return <div className="skillCard" key={keys}>{`${data}`}</div>
    }

    if (!skills.length){ 
        setSkills((prevState)=>{ 
                let pd = {...prevState}
                pd = skillList.map(skillMapper);
                return pd
        })  
    }

    return (
        <React.Fragment>
      
            <div className="slideTrack">
                    <div>
                        <div style={{fontVariant:"small-caps", fontSize:"4vw", 
                                    color:"rgb(13, 97, 80)", marginBottom:"9%"}}>
                           <strong>Skill_Sets</strong> 
                        </div> 
                        <div>
                            {skills}
                        </div>
                    </div>                   
            </div>
            
        </React.Fragment>
    )
}

export default Skills