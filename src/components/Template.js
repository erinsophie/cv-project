import React, { useState } from "react";
import SkillsForm from "./Skills";

function Template() {
  const [showSkillsForm, setShowSkillsForm] = useState(false);
  const [skills, setSkills] = useState([]);

  function handleClick() {
    setShowSkillsForm((prev) => !prev);
  }

  function addSkill(skill) {
    setSkills((prevSkills) => [...prevSkills, skill]);
  }

  return (
    <div className="cv-template">
      <hr />

      <div className="skills-section">
        <div>
          <p>SKILLS</p>
          <button onClick={handleClick} className="open-form-btn">
            Add skills +
          </button>
        </div>

        <div className="skills-list">
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          {showSkillsForm && <SkillsForm addSkill={addSkill} />}
        </div>
      </div>
    </div>
  );
}

export default Template;
