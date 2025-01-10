import React from 'react'
import {TicketTable} from './Ticket-Table/TicketTable.comp';
import {  Row, Col, Button } from 'react-bootstrap';
import tickets from '../assets/data/dummy-tisckets.json'
import './recent.css'
export const Recent = () => {
  return (
    <div className="dashboard-content">
       
        <Row className="action-buttons">
          <Col>
            
            <a href="/list">
              <Button className="custom-button">View All Tickets</Button>
            </a>
            <a href="/detail">
              <Button className="custom-button">View Details</Button>
            </a>
          </Col>
        </Row>
        <Row className="ticket-summary">
          
            <div className="ticket-card">
              <h3>Total Tickets</h3>
              <p>50</p>
            </div>
         
          <Col>
            <div className="ticket-card">
              <h3>Pending Tickets</h3>
              <p>5</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='aaa'>
            <h3 className="recent-title">RECENTLY ADDED TICKETS</h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="recent-ticket">
            <TicketTable tickets={tickets} />
          </Col>
        </Row>
      </div>
  )
}
