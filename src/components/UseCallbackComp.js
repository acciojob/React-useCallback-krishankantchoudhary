import React, { useState, memo } from "react";
import SkillList from "./SkillList";

const UseCallbackComp = ({ skills, addSkill, deleteSkill }) => {
  const [skill, setSkill] = useState("");

  const handleAdd = (e) => {
  e.preventDefault();
  if (skill.trim() === "") return;
  if (skills.includes(skill)) return; // ✅ duplicate check
  addSkill(skill);
  setSkill("");
};


  return (
    <div>
      <form onSubmit={handleAdd}> {/* ✅ SUBMIT HANDLER */}
        <input
          id="skill-input"
          placeholder="add your skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />

        <button
          id="skill-add-btn"
          type="submit"   // ✅ submit button
        >
          Add Skill
        </button>
      </form>

      <SkillList skills={skills} deleteSkill={deleteSkill} />
    </div>
  );
};

export default memo(UseCallbackComp);
