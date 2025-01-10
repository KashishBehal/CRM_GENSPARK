import React from 'react'
import {Form , Button} from 'react-bootstrap';
import './ticket.css'
export const AddTicketForm = () => {
  return (
   <div>
    <h1 className=' aa text-center'>
        Add New Ticket
    </h1>
      <Form  className='form'>
          

         

          <br />
          <Form.Label>Subject</Form.Label>
          <input
          className='input-box'
            type="text"
            name="subject"
            placeholder="Enter Subject"
            required
           
          />

          <br />
          <Form.Label>Issue found at</Form.Label>
          <input
          className='input-box'
            type="date"
            name="date"
            placeholder="Enter issue date"
            required
           
          />
          <br/>
<Form.Label>Details</Form.Label>
          <input
          className='input-box'
            type="text"
            name="text"
            placeholder="Enter Details"
            required
           
          />
          <br />
          <Button type="submit" className='abc'>Add New Ticket</Button>
       
        </Form>
   </div>
  )
}
