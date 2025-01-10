import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm'
export const NewTicket = () => {
  return (
    <Container>
        <Row>
            <Col>
            New Tickets
            </Col>
        </Row>
        <Row>
            <Col>
        <AddTicketForm></AddTicketForm>
            </Col>
        </Row>
    </Container>
  )
}
