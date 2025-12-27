import React, { useState,memo } from "react";
import SkillList from "./SkillList";

const UseCallbackComp=({skills,addSkill,deleteSkill})=>{
    const[skill,setSkill]=useState("")

    const handleAdd=(e)=>{
        e.preventDefault();
        if(skill.trim()==="")return;
        addSkill(skill)
        setSkill("")
    }
    return(
        <div>
            <form>
                <input
                id="skill-input"
                placeholder="add your skill"
                value={skill}
                onChange={(e)=>setSkill(e.target.value)}
                />
                <button 
                id="skill-add-btn"
                 type="button" 
                onClick={handleAdd}
                >
                Add Skill
                </button>
            </form>
            <SkillList deleteSkill={deleteSkill} skills={skills}/>
        </div>
    )
}

export default memo(UseCallbackComp);