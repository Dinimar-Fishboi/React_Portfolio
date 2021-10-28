import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [hover, setHover] = useState(false);

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

    const emptyField = (e) => {
      e.preventDefault();
      if (hover === false) {
        setHover(true)
      } else if (hover === true) {
        setErrorMessage("Please fill out all fields");
        setHover(false);
      }
    }

    const styles = {
      contact: {
        color: '#1B9AAA',
      },
      h1: {
        padding: '3%',
      },
    }

  return (
    <div style={styles.contact}>      
        <h1 style={styles.h1}>Contact</h1>
        <Container>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name </Form.Label>
            <Form.Control type="text" placeholder="Enter your name here" value={name} onMouseLeave={emptyField} onChange={handleInputChange} name="name"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={email} onMouseLeave={emptyField} onChange={handleInputChange} name="email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={6} value={message} name='message' onMouseLeave={emptyField} onChange={handleInputChange} type='text' placeholder="Hello!" />
          </Form.Group>
          <button className="anchor" style={{backgroundColor:'black'}} type="submit" onClick={handleFormSubmit}>
              Submit
          </button>
      </Form>
      {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
      </Container>
    </div>
  );
}