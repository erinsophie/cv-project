import React, { useState } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Contact from "./Contact";

function Template() {
  const [contact, setContact] = useState("");
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  function addSkill(skill) {
    setSkills((prevSkills) => [...prevSkills, skill]);
  }

  function addEducation(info) {
    setEducation((prevInfo) => [...prevInfo, info]);
  }

  function addWork(info) {
    setWork((prevInfo) => [...prevInfo, info]);
  }

  function capitalise(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div className="cv-template">
      <Contact />

      <div className="skills-section">
        <p>SKILLS</p>
        <hr />

        {skills.length > 0 && (
          <div className="skills-info">
            <ul className="list">
              {skills.map((skill) => (
                <li key={skill.id}>{capitalise(skill.text)}</li>
              ))}
            </ul>
          </div>
        )}
        <Skills addSkill={addSkill} />
      </div>

      <div className="education-section">
        <p>EDUCATION</p>
        <hr />

        {education.length > 0 && (
          <div className="education-info">
            {education.map((info) => (
              <div key={info.id} className="education-component">
                <p className="title">
                  {info.degree} | {info.field}
                </p>
                <p>{info.school}</p>
                <p>
                  ({info.dateFrom} -{" "}
                  {info.stillStudying ? "Present" : info.dateUntil})
                </p>
              </div>
            ))}
          </div>
        )}
        <Education addEducation={addEducation} />
      </div>

      <div className="work-section">
        <p>WORK</p>
        <hr />

        {work.length > 0 && (
          <div className="work-info">
            {work.map((info) => (
              <div key={info.id} className="work-component">
                <p className="title">
                  {info.jobTitle} | ({info.dateFrom} -{" "}
                  {info.current ? "Current" : info.dateUntil})
                </p>
                <p>{info.company}</p>

                <ul className="list">
                  {info.description.split("\n").map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        <Work addWork={addWork} />
      </div>
    </div>
  );
}

export default Template;
