import React, { useState } from "react";
import Skills from "./Skills";
import Education from "./Education";

function Template() {
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);

  const [showForm, setShowForm] = useState({
    skillsForm: false,
    educationForm: false,
    workForm: false,
  });

  function handleClick(event) {
    const { form } = event.target.dataset;
    setShowForm((prev) => ({
      ...prev,
      [form]: !prev[form],
    }));
  }

  function addSkill(skill) {
    setSkills((prevSkills) => [...prevSkills, skill]);
  }

  function addEducation(info) {
    setEducation((prevInfo) => [...prevInfo, info]);
  }

  return (
    <div className="cv-template">
      <hr />

      <div className="skills-section">
        <div>
          <p>SKILLS</p>
          <button
            onClick={handleClick}
            data-form="skillsForm"
            className="open-form-btn"
          >
            {showForm.skillsForm ? "Close" : "Add skills +"}
          </button>
        </div>

        <div className="info">
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          {showForm.skillsForm && <Skills addSkill={addSkill} />}
        </div>
      </div>

      <hr />
      <div className="education-section">
        <div>
          <p>EDUCATION</p>
          <button
            onClick={handleClick}
            data-form="educationForm"
            className="open-form-btn"
          >
            {showForm.educationForm ? "Close" : "Add education +"}
          </button>
        </div>

        <div className="info">
          {education.map((info, index) => (
            <div key={index}>
              <p>{info.degree}</p>
              <p>{info.school}</p>
              <p>{info.dates}</p>
            </div>
          ))}
          {showForm.educationForm && <Education addEducation={addEducation} />}
        </div>
      </div>
    </div>
  );
}

export default Template;
