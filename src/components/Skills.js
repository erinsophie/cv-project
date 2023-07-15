import React, { useState } from "react";

function Skills({ addSkill }) {
  const [currentSkill, setCurrentSkill] = useState("");

  function handleInput(event) {
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
        placeholder="Add 5 of your skills"
        value={currentSkill}
        onChange={handleInput}
      />
      <button className="add-btn">+</button>
    </form>
  );
}

export default Skills;
