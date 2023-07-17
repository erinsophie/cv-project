import React, { useState } from "react";
import uniqid from "uniqid";

function Skills({ addSkill }) {
  const [currentSkill, setCurrentSkill] = useState({
    text: "",
    id: uniqid(),
  });
  const [isOpen, setIsOpen] = useState(false);

  function handleInput(event) {
    setCurrentSkill({
      text: event.target.value,
      id: currentSkill.id,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (currentSkill.text !== "") {
      addSkill(currentSkill);
      setCurrentSkill({ text: "", id: uniqid() });
      handleFormToggle();
    }
  }

  console.log(currentSkill)

  function handleFormToggle() {
    setIsOpen((prev) => !prev);
    setCurrentSkill({ text: "", id: uniqid() });
  }

  return (
    <div>
      {isOpen && (
        <form className="skills-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add 5 of your skills"
            value={currentSkill.text}
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
