import React, { useState } from 'react';
import { Google } from './google';
import './login.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase'; // Ensure correct path
import { setDoc, doc } from 'firebase/firestore';



export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      console.log('User registered successfully:', user);
  
      if (user) {
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
  
       alert('User registered successfully!', {
          position: 'top-center',
        });
        window.location.href="./login";
      }
    } catch (error) {
      console.error('Error occurred:', error.code, error.message);
      alert(`Error: ${error.message}`, {
        position: 'top-center',
      });
    }
  };
  

  return (
    <div >
      <Container className="wrapper">
        <Row>
          <Col className="c">
            <h1 className="b">Registration Form</h1>
          </Col>

          <Form onSubmit={handleRegister} className='form'>
            <Form.Label>First Name</Form.Label>
            <input
            className='input-box'
              type="text"
              name="fname"
              placeholder="Enter First Name"
              required
              onChange={(e) => setFname(e.target.value)}
            />

            <br />
            <Form.Label>Last Name</Form.Label>
            <input
            className='input-box'
              type="text"
              name="lname"
              placeholder="Enter Last Name"
              required
              onChange={(e) => setLname(e.target.value)}
            />

            <br />
            <Form.Label>Email Address</Form.Label>
            <input
            className='input-box'
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <Form.Label>Password</Form.Label>
            <input
            className='input-box'
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <Button  type='submit' className='abc' >Register</Button>
          <Google/>
          </Form>
        </Row>
      </Container>
    </div>
  );
};


