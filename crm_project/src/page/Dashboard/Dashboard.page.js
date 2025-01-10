import React from 'react';
import './d.css'; // Updated styling file
// import { Container, Row, Col, Button } from 'react-bootstrap';
import {Button} from 'react-bootstrap'
// import { TicketTable } from '../../components/Ticket-Table/TicketTable.comp';
// import tickets from '../../assets/data/dummy-tisckets.json';
import { motion } from 'framer-motion';



export const Dashboard = () => {
 

  // const handleButtonClick = () => {
  //   window.open(resumeUrl, '_blank'); // Open the resume URL in a new tab
  // };

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: -50,
    },
    animate: {
      x: '-100%',
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration:5,
      },
    },
  };

  return (
    <div className="dashboard-container">
      
      <div className="hero">
        <div className="wrapper">
          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>ASSIST PRO</motion.h2>
            <motion.h1 variants={textVariants}>Your tickets, organized and resolved.</motion.h1>
            <motion.div variants={textVariants} className="buttons">
              
              <a href="/form">
              <Button className="custom-button">Add New Ticket</Button>
            </a>
            </motion.div>
            <motion.img
              src="scroll.png"
              alt="."
              variants={textVariants.scrollButton}
            />
          </motion.div>
          
        </div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
           Simplify. Connect. Grow.
        </motion.div>
       <img src="aaaa.jpeg" alt='a' className='imageContainer'></img>
      </div>
    
      {/* <Container className="dashboard-content">
       
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
          <Col>
            <div className="ticket-card">
              <h3>Total Tickets</h3>
              <p>50</p>
            </div>
          </Col>
          <Col>
            <div className="ticket-card">
              <h3>Pending Tickets</h3>
              <p>5</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="recent-title">Recently Added Tickets</h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="recent-ticket">
            <TicketTable tickets={tickets} />
          </Col>
        </Row>
      </Container> */}
     
    </div>
  );
};
