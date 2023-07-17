import React, { useState } from "react";
import Skills from "./Skills";
import Education from "./Education";

function Template() {
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);

  function addSkill(skill) {
    setSkills((prevSkills) => [...prevSkills, skill]);
  }

  function addEducation(info) {
    setEducation((prevInfo) => [...prevInfo, info]);
  }

  return (
    <div className="cv-template">
      <hr />

      <Skills addSkill={addSkill}/>
      <div className="info">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <hr />
      <div className="education-section">
        <div>
          <p>EDUCATION</p>
          <button
            data-form="educationForm"
            className="open-form-btn"
          >
            Add education +
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
        </div>
      </div>
    </div>
  );
}

export default Template;
