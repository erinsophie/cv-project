import React, { useState } from "react";

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    currentTitle: "",
    email: "",
    number: "",
    location: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  console.log(contactInfo);

  return (
    <div className="contact-section">
      <div className="name-title">
        <input
          type="text"
          name="name"
          value={contactInfo.name}
          onChange={handleInput}
          placeholder="Name"
          className="name-input"
        />

        <input
          type="text"
          name="currentTitle"
          value={contactInfo.currentTitle}
          onChange={handleInput}
          placeholder="Current title"
          className="current-title"
        />
      </div>

      <div className="contact-data">
        <div>
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleInput}
            placeholder="janedoe@gmail.com"
          />
        </div>

        <div>
          <i className="fa-solid fa-phone"></i>
          <input
            type="text"
            name="number"
            value={contactInfo.number}
            onChange={handleInput}
            placeholder="+44723904134"
          />
        </div>

        <div>
          <i className="fa-solid fa-location-dot"></i>
          <input
            type="text"
            name="location"
            value={contactInfo.location}
            onChange={handleInput}
            placeholder="57 Oakwood Avenue"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
