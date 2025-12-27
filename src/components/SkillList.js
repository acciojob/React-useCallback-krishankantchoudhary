import React, { memo } from "react";

const SkillList = ({ skills, deleteSkill }) => {
  const handledelete = (index) => {
    deleteSkill(index);
  };
  return (
    <div>
      <ul id="skill-list">
        {skills.map((skill, index) => (
          <li
            id={`skill-number-${index}`}
            key={index}
            onClick={() => handledelete(index)}
            style={{
              cursor: "pointer",
              userSelect: "none",
            }}
            title="Click to delete"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(SkillList);
