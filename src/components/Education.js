import React, { useState, useEffect } from 'react';
import '../styles/education.css';
import Button from './Button';
import uniqid from 'uniqid';

function Education({
  addData,
  updateData,
  currentEdit,
  setCurrentEdit,
  showButtons,
}) {
  const [educationData, setEducationData] = useState({
    school: '',
    degree: '',
    field: '',
    dateFrom: '',
    dateUntil: '',
    stillStudying: false,
    id: uniqid(),
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (currentEdit && currentEdit.section === 'education') {
      setIsOpen(true);
      setEducationData(currentEdit.data);
    }
  }, [currentEdit]);

  function handleInput(event) {
    const { name, value, type, checked } = event.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function clearData() {
    return {
      school: '',
      degree: '',
      field: '',
      dateFrom: '',
      dateUntil: '',
      stillStudying: '',
      id: uniqid(),
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (currentEdit && currentEdit.section === 'education') {
      updateData('education', educationData);
    } else {
      addData('education', educationData);
    }
    setEducationData(clearData);
    setCurrentEdit(null);
    handleFormToggle();
  }

  function handleFormToggle() {
    setIsOpen((prev) => !prev);
    setEducationData(clearData);
  }

  return (
    <div>
      {isOpen && (
        <form className="education-form form" onSubmit={handleSubmit}>
          <label htmlFor="degree">Degree awarded</label>
          <select
            id="degree"
            name="degree"
            value={educationData.degree}
            onChange={handleInput}
            required
          >
            <option>--Select an option--</option>
            <option value="high school or equivalent">
              High school or equivalent
            </option>
            <option value="associate">Associate</option>
            <option value="bachelor's">Bachelor's</option>
            <option value="master's">Master's</option>
            <option value="doctorate">Doctorate</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="field">Field of study</label>
          <input
            type="text"
            id="field"
            name="field"
            value={educationData.field}
            onChange={handleInput}
            required
          />

          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            name="school"
            value={educationData.school}
            onChange={handleInput}
            required
          />

          <label htmlFor="dates">Dates attended</label>
          <div className="date-container">
            <div>
              <p>From:</p>
              <input
                type="date"
                id="dates"
                name="dateFrom"
                value={educationData.dateFrom}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <p>Until:</p>
              {!educationData.stillStudying && (
                <input
                  type="date"
                  name="dateUntil"
                  value={educationData.dateUntil}
                  onChange={handleInput}
                  required
                />
              )}
            </div>

            <div>
              <label htmlFor="stillStudying">
                I am currently studying here
              </label>
              <input
                type="checkbox"
                id="stillStudying"
                name="stillStudying"
                checked={educationData.stillStudying}
                onChange={handleInput}
              />
            </div>
          </div>

          <button className="add-btn">Add</button>
        </form>
      )}
      <Button
        show={showButtons}
        className="open-form-btn"
        onClick={handleFormToggle}
      >
        {' '}
        {isOpen ? 'Close' : 'Add education +'}
      </Button>
    </div>
  );
}

export default Education;
