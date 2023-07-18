import React, { useState, useEffect } from "react";
import Button from "./Button";
import uniqid from "uniqid";

function Skills({
  addData,
  updateData,
  currentEdit,
  setCurrentEdit,
  showButtons,
}) {
  const [currentSkill, setCurrentSkill] = useState({
    text: "",
    id: uniqid(),
  });
  const [isOpen, setIsOpen] = useState(false);
  const editSkillsItem = currentEdit && currentEdit.section === "skills";

  useEffect(() => {
    if (editSkillsItem) {
      setIsOpen(true);
      setCurrentSkill(currentEdit.data);
    }
  }, [currentEdit]);

  function handleInput(event) {
    setCurrentSkill({
      text: event.target.value,
      id: currentSkill.id,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (currentSkill.text !== "") {
      if (editSkillsItem) {
        updateData("skills", currentSkill);
      } else {
        addData("skills", currentSkill);
      }
      setCurrentSkill({ text: "", id: uniqid() });
      setCurrentEdit(null);
      handleFormToggle();
    }
  }

  function handleFormToggle() {
    setIsOpen((prev) => !prev);
    setCurrentSkill({ text: "", id: uniqid() });
  }

  return (
    <div>
      {isOpen && (
        <form className="skills-form form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add 5 of your skills"
            value={currentSkill.text}
            onChange={handleInput}
          />
          <button className="add-btn">Add</button>
        </form>
      )}

      <Button
        show={showButtons}
        className="open-form-btn"
        onClick={handleFormToggle}
      >
        {" "}
        {isOpen ? "Close" : "Add skills +"}
      </Button>
    </div>
  );
}

export default Skills;
