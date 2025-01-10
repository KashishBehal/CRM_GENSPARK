import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Google } from '../components/google';
export const Redirect = () => {
  return (
    <div >
    <Container className="wrapper">
      <Row>
        <Col className="c">
          <h1 className="b">Login Here</h1>
        </Col>

        <Form  className='form'>
          

         

          <br />
          <Form.Label>Email Address</Form.Label>
          <input
          className='input-box'
            type="email"
            name="email"
            placeholder="Enter Email"
            required
           
          />

          <br />
          <Form.Label>Password</Form.Label>
          <input
          className='input-box'
            type="password"
            name="password"
            placeholder="Enter Password"
            required
           
          />

          <br />
          <Button type="submit" className='abc'>Login</Button>
        <Google/>
        </Form>
      </Row>
    </Container>
  </div>
  )
}
