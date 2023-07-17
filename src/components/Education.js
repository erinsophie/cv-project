import React, { useState } from "react";

function Education({ addEducation }) {
  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    field: "",
    dateFrom: "",
    dateUntil: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  function handleInput(event) {
    const { name, value } = event.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function clearData() {
    return { school: "", degree: "", field: "", dateFrom: "", dateUntil: "" };
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
            <option></option>
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

          <label htmlFor="date-from">Dates attended</label>
          <div className="date-container">
            <input
              type="date"
              id="date-from"
              name="dateFrom"
              value={educationData.dateFrom}
              onChange={handleInput}
            />
            <input
              type="date"
              id="date-until"
              name="dateUntil"
              value={educationData.dateUntil}
              onChange={handleInput}
            />
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
