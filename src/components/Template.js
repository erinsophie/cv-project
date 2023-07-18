import React, { useState } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Contact from "./Contact";

function Template() {
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  function addData(section, data) {
    switch (section) {
      case "skills":
        setSkills((prevSkills) => [...prevSkills, data]);
        break;
      case "education":
        setEducation((prevEducation) => [...prevEducation, data]);
        break;
      case "work":
        setWork((prevWork) => [...prevWork, data]);
        break;
    }
  }

  function deleteItem(section, id) {
    switch (section) {
      case "skills":
        setSkills((prevSkills) =>
          prevSkills.filter((skill) => skill.id !== id)
        );
        break;
      case "education":
        setEducation((prevEducation) =>
          prevEducation.filter((education) => education.id !== id)
        );
        break;
      case "work":
        setWork((prevWork) => prevWork.filter((work) => work.id !== id));
        break;
    }
  }

  return (
    <div className="cv-template">
      <Contact />

      <div className="section">
        <p>SKILLS</p>
        <hr />

        {skills.length > 0 && (
          <div className="skills-info">
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill.id}>
                  {skill.text}{" "}
                  <button
                    className="delete-btn"
                    onClick={() => deleteItem("skills", skill.id)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Skills addData={addData} deleteItem={deleteItem} />
      </div>

      <div className="section">
        <p>EDUCATION</p>
        <hr />

        {education.length > 0 && (
          <div className="info">
            {education.map((info) => (
              <div key={info.id} className="component">
                <p className="title">
                  {info.degree} | {info.field}
                </p>

                <p>{info.school}</p>
                <p>
                  ({info.dateFrom} -{" "}
                  {info.stillStudying ? "Present" : info.dateUntil})
                </p>
                <button
                  className="delete-btn"
                  onClick={() => deleteItem("education", info.id)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
        <Education addData={addData} />
      </div>

      <div className="section">
        <p>WORK</p>
        <hr />

        {work.length > 0 && (
          <div className="info">
            {work.map((info) => (
              <div key={info.id} className="component">
                <p className="title">
                  {info.jobTitle} | ({info.dateFrom} -{" "}
                  {info.current ? "Current" : info.dateUntil})
                </p>
                <p>{info.company}</p>

                <ul className="duties-list">
                  {info.description.split("\n").map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <button
                  className="delete-btn"
                  onClick={() => deleteItem("work", info.id)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
        <Work addData={addData} />
      </div>
    </div>
  );
}

export default Template;
