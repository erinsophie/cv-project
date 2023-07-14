import React, { useState } from "react";

function SkillsForm({ addSkill }) {
  const [currentSkill, setCurrentSkill] = useState("");

  function handleSkillChange(event) {
    setCurrentSkill(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (currentSkill !== "") {
      addSkill(currentSkill);
      setCurrentSkill("");
    }
  }

  return (
    <form className="skills-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add 5 of your top skills"
        value={currentSkill}
        onChange={handleSkillChange}
      />
      <button className="add-btn">+</button>
    </form>
  );
}

export default SkillsForm;

//name
//onChange={}
//value={}
