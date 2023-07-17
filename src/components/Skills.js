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
      handleFormToggle();
    }
  }

  function handleFormToggle() {
    setIsOpen((prev) => !prev);
    setCurrentSkill("");
  }

  return (
    <div>
      {isOpen && (
        <form className="skills-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add 5 of your skills"
            value={currentSkill}
            onChange={handleInput}
          />
          <button className="add-btn">Add</button>
        </form>
      )}

      <button onClick={handleFormToggle} className="open-form-btn">
        {isOpen ? "Close" : "Add skills +"}
      </button>
    </div>
  );
}

export default Skills;
