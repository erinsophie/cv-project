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

      <div className="skills-section">
        <p>SKILLS</p>
        <hr />
       
       {skills.length > 0 && <div className="info">
          <ul className='skills-list'>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>}
       
        <Skills addSkill={addSkill} />
      </div>

      
      <div className="education-section">
        <div>
          <p>EDUCATION</p>
          <hr />
          <button data-form="educationForm" className="open-form-btn">
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
