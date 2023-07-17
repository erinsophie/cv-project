import React, { useState } from "react";

function Skills({ addSkill }) {
  const [currentSkill, setCurrentSkill] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  function handleFormToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="skills-section">
    <div>
      <p>SKILLS</p>
      <button
        onClick={handleFormToggle}
        className="open-form-btn"
      >
        Add skills +
      </button>
    </div>

      {isOpen && (
        <form className="skills-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add 5 of your skills"
            value={currentSkill}
            onChange={handleInput}
          />
          <button className="add-btn">+</button>
        </form>
      )}
    </div>
  );
}

export default Skills;
