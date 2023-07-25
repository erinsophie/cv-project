import React, { useState, useEffect } from 'react';
import '../styles/Work.css';
import Button from './Button';
import uniqid from 'uniqid';

function Work({
  addData,
  updateData,
  currentEdit,
  setCurrentEdit,
  showButtons,
}) {
  const [workData, setWorkData] = useState({
    jobTitle: '',
    dateFrom: '',
    dateUntil: '',
    current: false,
    company: '',
    description: '',
    id: uniqid(),
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (currentEdit && currentEdit.section === 'work') {
      setIsOpen(true);
      setWorkData(currentEdit.data);
    }
  }, [currentEdit]);

  function handleInput(event) {
    const { name, value, type, checked } = event.target;
    setWorkData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function clearData() {
    return {
      jobTitle: '',
      dateFrom: '',
      dateUntil: '',
      current: false,
      company: '',
      description: '',
      id: uniqid(),
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (currentEdit && currentEdit.section === 'work') {
      updateData('work', workData);
    } else {
      addData('work', workData);
    }

    setWorkData(clearData);
    setCurrentEdit(null);
    handleFormToggle();
  }

  function handleFormToggle() {
    setIsOpen((prev) => !prev);
    setWorkData(clearData);
  }

  return (
    <div>
      {isOpen && (
        <form className="work-form form" onSubmit={handleSubmit}>
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
            value={workData.company}
            onChange={handleInput}
            required
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
            required
          />

          <button className="add-btn">Add</button>
        </form>
      )}
      <Button
        show={showButtons}
        className="open-form-btn"
        onClick={handleFormToggle}
      >
        {' '}
        {isOpen ? 'Close' : 'Add work +'}
      </Button>
    </div>
  );
}

export default Work;
