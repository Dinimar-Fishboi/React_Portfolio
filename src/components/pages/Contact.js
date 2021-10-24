import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

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

    const styles = {
      h1: {
        padding: '3%'
      }
    }

  return (
    <>      
        <h1 style={styles.h1}>Contact</h1>
        <Container>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name </Form.Label>
            <Form.Control type="text" placeholder="Enter your name here" value={name} onChange={handleInputChange} name="name"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={email} onChange={handleInputChange} name="email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} value={message} name='message' onChange={handleInputChange} type='text' placeholder="Hello!" />
          </Form.Group>
          <button type="submit" onClick={handleFormSubmit}>
              Submit
          </button>
      </Form>
      {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
      </Container>
    </>
  );
}