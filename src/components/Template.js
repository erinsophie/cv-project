import React, { useState } from "react";
import SkillsForm from "./Skills";

function Template() {
  const [showSkillsForm, setShowSkillsForm] = useState(false);

  function handleClick() {
    setShowSkillsForm((prev) => !prev);
  }

  return (
    <div className="cv-template">
      <hr />
      <p>SKILLS</p>
      <button onClick={handleClick} className="add-btn">
        Add skills +
      </button>
      {showSkillsForm && <SkillsForm />}
    </div>
  );
}

export default Template;
