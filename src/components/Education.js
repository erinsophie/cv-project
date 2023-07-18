import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

function Education({ addData, updateData, currentEdit, setCurrentEdit }) {
  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    field: "",
    dateFrom: "",
    dateUntil: "",
    stillStudying: false,
    id: uniqid(),
  });
  const [isOpen, setIsOpen] = useState(false);
  const editEducationItem = currentEdit && currentEdit.section === "education";

  useEffect(() => {
    if (editEducationItem) {
      setIsOpen(true);
      setEducationData(currentEdit.data);
    }
  }, [currentEdit]);

  function handleInput(event) {
    const { name, value, type, checked } = event.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function clearData() {
    return {
      school: "",
      degree: "",
      field: "",
      dateFrom: "",
      dateUntil: "",
      stillStudying: "",
      id: uniqid(),
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (editEducationItem) {
      updateData("education", educationData);
    } else {
      addData("education", educationData);
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
      <button onClick={handleFormToggle} className="open-form-btn">
        {isOpen ? "Close" : "Add education +"}
      </button>
    </div>
  );
}

export default Education;
