import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

    const handleFormSubmit = (e) => {
      e.preventDefault();

      if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
        return;
      }

      if (!email || !name || !message) {
        setErrorMessage("Please fill out all fields");
        return;
      }

      setName('');
      setEmail('');
      setMessage('');
      setErrorMessage(`Thank you ${name}! - We'll be in touch soon`);
    };

  return (
    <div className="border">
      <h1>Contact Page</h1>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}