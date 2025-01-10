import React, { useEffect, useState } from 'react'
import { Container , Row , Col, Button } from 'react-bootstrap'
import tickets from '../../assets/data/dummy-tisckets.json';
import { Message } from '../../components/message/Message';
import { Update } from '../../components/update/Update';
const ticket=tickets[0];
export const Tickett = () => {
    const [message , setMessage]=useState('');
useEffect(()=>{} ,[message]);

    const handleChange=(e)=>{
        setMessage(e.message.value);
    }
    const handleOnSubmit=()=>{
        alert('Form Submitted');
    }
  return (
    <Container>
      <br/>
      <br/>
      
        <Row>
            <Col className='text-weight-bolder text-secondary'>
            <div className='subject'>Subject : {ticket.subject}</div>
            <div className='date'>Date : {ticket.addedAt}</div>
            <div className='status'>Status : {ticket.status}</div>
            </Col>
            <Col className='text-right'>
            <Button variant='outline-info color-black '>Close Ticket</Button></Col>
            
        </Row>
        <Row>
            <Col>
            <Message msg={ticket.history}/>
            </Col>
        </Row>
        <hr/>
        <Row className='mt-4'>
            <Col>
            <Update msg='message'handleChange={handleChange}
            handleOnSubmit={handleOnSubmit}
            />
            </Col>
        </Row>
    </Container>
  )
}
