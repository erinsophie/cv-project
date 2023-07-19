import React, { useState } from 'react';
import Skills from './Skills';
import Education from './Education';
import Work from './Work';
import Contact from './Contact';
import uniqid from 'uniqid';
import Button from './Button';

function Template({ showButtons }) {
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  const [currentEdit, setCurrentEdit] = useState(null);

  function updateData(section, updatedData) {
    switch (section) {
      case 'skills':
        setSkills((prevSkills) =>
          prevSkills.map((skill) =>
            skill.id === updatedData.id ? updatedData : skill,
          ),
        );
        break;
      case 'education':
        setEducation((prevEducation) =>
          prevEducation.map((edu) =>
            edu.id === updatedData.id ? updatedData : edu,
          ),
        );
        break;
      case 'work':
        setWork((prevWork) =>
          prevWork.map((work) =>
            work.id === updatedData.id ? updatedData : work,
          ),
        );
        break;
      default:
    }
  }

  function editItem(section, id) {
    let currentItem;
    switch (section) {
      case 'skills':
        currentItem = skills.find((skill) => skill.id === id);
        break;
      case 'education':
        currentItem = education.find((edu) => edu.id === id);
        break;
      case 'work':
        currentItem = work.find((work) => work.id === id);
        break;
      default:
    }
    if (currentItem) {
      setCurrentEdit({ section, data: currentItem });
    }
  }

  function addData(section, data) {
    switch (section) {
      case 'skills':
        setSkills((prevSkills) => [...prevSkills, data]);
        break;
      case 'education':
        setEducation((prevEducation) => [...prevEducation, data]);
        break;
      case 'work':
        setWork((prevWork) => [...prevWork, data]);
        break;
      default:
    }
  }

  function deleteItem(section, id) {
    switch (section) {
      case 'skills':
        setSkills((prevSkills) =>
          prevSkills.filter((skill) => skill.id !== id),
        );
        break;
      case 'education':
        setEducation((prevEducation) =>
          prevEducation.filter((education) => education.id !== id),
        );
        break;
      case 'work':
        setWork((prevWork) => prevWork.filter((work) => work.id !== id));
        break;
      default:
    }
  }

  function capitalise(str) {
    return str[0].toUpperCase() + str.slice(1);
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
                  <div className="list-item">
                    {capitalise(skill.text)}
                    <div className="edit-delete-container">
                      <Button
                        show={showButtons}
                        className="edit-btn"
                        onClick={() => editItem('skills', skill.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        show={showButtons}
                        className="delete-btn"
                        onClick={() => deleteItem('skills', skill.id)}
                      >
                        x
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Skills
          addData={addData}
          updateData={updateData}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
          showButtons={showButtons}
        />
      </div>

      <div className="section">
        <p>EDUCATION</p>
        <hr />

        {education.length > 0 && (
          <div className="info">
            {education.map((info) => (
              <div key={info.id} className="component">
                <div className="input-data">
                  <p className="title">
                    {capitalise(info.degree)} | {capitalise(info.field)}
                  </p>
                  <p>
                    ({info.dateFrom} -{' '}
                    {info.stillStudying ? 'Present' : info.dateUntil})
                  </p>
                  <p>{capitalise(info.school)}</p>
                </div>

                <div className="edit-delete-container">
                  <Button
                    show={showButtons}
                    className="edit-btn"
                    onClick={() => editItem('education', info.id)}
                  >
                    Edit
                  </Button>

                  <Button
                    show={showButtons}
                    className="delete-btn"
                    onClick={() => deleteItem('education', info.id)}
                  >
                    x
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
        <Education
          addData={addData}
          updateData={updateData}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
          showButtons={showButtons}
        />
      </div>

      <div className="section">
        <p>WORK</p>
        <hr />

        {work.length > 0 && (
          <div className="info">
            {work.map((info) => (
              <div key={info.id} className="component">
                <div className="input-data">
                  <p className="title">{capitalise(info.jobTitle)}</p>
                  <p>
                    ({info.dateFrom} -{' '}
                    {info.current ? 'Current' : info.dateUntil})
                  </p>
                  <p>{capitalise(info.company)}</p>

                  <ul className="duties-list">
                    {info.description.split('\n').map((item) => (
                      <li key={uniqid()}>{capitalise(item)}</li>
                    ))}
                  </ul>
                </div>

                <div className="edit-delete-container">
                  <Button
                    show={showButtons}
                    className="edit-btn"
                    onClick={() => editItem('work', info.id)}
                  >
                    Edit
                  </Button>

                  <Button
                    show={showButtons}
                    className="delete-btn"
                    onClick={() => deleteItem('work', info.id)}
                  >
                    x
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
        <Work
          addData={addData}
          updateData={updateData}
          currentEdit={currentEdit}
          setCurrentEdit={setCurrentEdit}
          showButtons={showButtons}
        />
      </div>
    </div>
  );
}

export default Template;
