
import React, { useCallback, useState } from "react";
import UseCallbackComp from "./UseCallbackComp";
import SkillList from "./SkillList";

const App=()=>{
    const[skills,setSkills]=useState([])

    const addSkill=useCallback((skill)=>{
        setSkills((prevSkills)=>[...prevSkills,skill])
    },[])

    const deleteSkill=useCallback((index)=>{
        setSkills((prevSkills)=>prevSkills.filter((_,i)=> i !== index))
    },[]);

    return(
        <div>
            <h2>Skill Manager</h2>
            <UseCallbackComp
            skills={skills}
            addSkill={addSkill}
            deleteSkill={deleteSkill}
            />
        </div>
    )
}

export default App;