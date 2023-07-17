import React, { useState } from "react";

function Education({ addEducation }) {
  const [educationData, setEducationData] = useState({
    degree: "",
    school: "",
    dates: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    addEducation(educationData);
    setEducationData({ degree: "", school: "", dates: "" });
  }

  return (
    <form className="education-form" onSubmit={handleSubmit}>
      <label htmlFor="degree">Degree awarded:</label>
      <input
        type="text"
        id="degree"
        name="degree"
        value={educationData.degree}
        onChange={handleInput}
      />

      <label htmlFor="school">School:</label>
      <input
        type="text"
        id="school"
        name="school"
        value={educationData.school}
        onChange={handleInput}
      />

      <label htmlFor="dates">Dates:</label>
      <input
        type="text"
        id="dates"
        name="dates"
        value={educationData.dates}
        onChange={handleInput}
      />

      <button className="add-btn">
        +
      </button>
    </form>
  );
}

export default Education;
