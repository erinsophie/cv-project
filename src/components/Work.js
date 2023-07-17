import React, { useState } from "react";
import uniqid from "uniqid";

function Work({ addWork }) {
  const [workData, setWorkData] = useState({
    jobTitle: "",
    dateFrom: "",
    dateUntil: "",
    current: false,
    company: "",
    description: "",
    id: uniqid(),
  });
  const [isOpen, setIsOpen] = useState(false);

  function handleInput(event) {
    const { name, value, type, checked } = event.target;
    setWorkData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function clearData() {
    return {
      jobTitle: "",
      dateFrom: "",
      dateUntil: "",
      current: false,
      comapny: "",
      description: "",
      id: uniqid(),
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    addWork(workData);
    setWorkData(clearData);
    handleFormToggle();
  }

  function handleFormToggle() {
    setIsOpen((prev) => !prev);
    setWorkData(clearData);
  }

  return (
    <div>
      {isOpen && (
        <form className="work-form" onSubmit={handleSubmit}>
          <label htmlFor="jobTitle">Job title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={workData.jobTitle}
            onChange={handleInput}
            required
          />

          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            checked={workData.company}
            onChange={handleInput}
          />

          <label htmlFor="dates">Duration</label>
          <div className="date-container">
            <div>
              <p>Start date:</p>
              <input
                type="date"
                id="dates"
                name="dateFrom"
                value={workData.dateFrom}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <p>End date:</p>
              {!workData.current && (
                <input
                  type="date"
                  name="dateUntil"
                  value={workData.dateUntil}
                  onChange={handleInput}
                  required
                />
              )}
            </div>

            <div>
              <label htmlFor="current">I am currently working here</label>
              <input
                type="checkbox"
                id="current"
                name="current"
                checked={workData.current}
                onChange={handleInput}
              />
            </div>
          </div>

          <label htmlFor="description"></label>
          <textarea
            id="description"
            name="description"
            rows={6}
            value={workData.description}
            placeholder="Every new line will be formatted as a bullet point"
            onChange={handleInput}
          />

          <button className="add-btn">Add</button>
        </form>
      )}
      <button onClick={handleFormToggle} className="open-form-btn">
        {isOpen ? "Close" : "Add work +"}
      </button>
    </div>
  );
}

export default Work;
