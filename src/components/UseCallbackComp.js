import React, { useState,memo } from "react";
import SkillList from "./SkillList";

const UseCallbackComp=({skills,addSkill,deleteSkill})=>{
    const[skill,setSkill]=useState("")

    const handleAdd=()=>{
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
                <button type="button"
                id="skill-add-btn"
                onClick={handleAdd}
                >Add Skill</button>
            </form>
            <SkillList deleteSkill={deleteSkill} skills={skills}/>
        </div>
    )
}

export default memo(UseCallbackComp);