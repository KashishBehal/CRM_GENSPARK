import React, { useEffect, useState } from 'react';
import { SearchForm } from '../../components/search-form/SearchForm';
import { Container , Row , Col, Button } from 'react-bootstrap'
import { TicketTable } from '../../components/Ticket-Table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tisckets.json';
export const TicketListing = () => {
    const [str , setStr]=useState('');
    const [ds , setDs]=useState(tickets);
    useEffect(()=>{
        // setDs(tickets);
    } , [str , ds]);
    const handleChange=e=>{
        const {value}=e.target
        setStr(value);
        search(value);
        console.log(e.target)
    }
    const search=(sttr)=>{
        const display=tickets.filter(row=>row.subject.toLowerCase().includes(sttr.toLowerCase()))
    setDs(display)
    }
  return (
   <Container>
    <Row>
        <Col>
     <Button >Add new TicketTable</Button>
        </Col>
        <Col className='text-right'><SearchForm handleChange={handleChange} str={str}/></Col>
    </Row>
    <hr/>
    <Row>
        <Col>
        <TicketTable tickets={ds}/>
        </Col>
    </Row>
   </Container>
  )
}
