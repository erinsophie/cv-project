import React, { useState } from "react";

function Education({ addEducation }) {
  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    field: "",
    dateFrom: "",
    dateUntil: "",
    stillStudying: false,
  });
  const [isOpen, setIsOpen] = useState(false);

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
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    addEducation(educationData);
    setEducationData(clearData);
    handleFormToggle();
  }

  function handleFormToggle() {
    setIsOpen((prev) => !prev);
    setEducationData(clearData);
  }

  console.log(educationData);

  return (
    <div>
      {isOpen && (
        <form className="education-form" onSubmit={handleSubmit}>
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            name="school"
            value={educationData.school}
            onChange={handleInput}
          />

          <label htmlFor="degree">Degree awarded</label>
          <select
            id="degree"
            name="degree"
            value={educationData.degree}
            onChange={handleInput}
          >
            <option>--Select an option--</option>
            <option value="high school or equivalent">
              High school or equivalent
            </option>
            <option value="associate">Associate</option>
            <option value="bachelors">Bachelor's</option>
            <option value="masters">Masters</option>
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
