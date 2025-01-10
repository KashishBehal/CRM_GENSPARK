// import React from 'react'
// import './header.css';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// export const Header = () => {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//     <Container>
//       <Navbar.Brand href="#home">CRM Portal</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Task Manager</Nav.Link>
//           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1"> Add new Ticket</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">
//               Add new Client
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Ticket Landing Page</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">
//              Client Landing Page
//             </NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   )
// }
// import React from 'react'
// import './header.css';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';
import {motion} from 'framer-motion';

export const Header = () => {
  return (
    <div className="navbar">
    
    
    <div className="wrapper">
        <motion.span initial={{opacity:0 , scale:0.5}}  
        animate={{opacity:1 , scale:1}}
        transition={{duration:0.5}}
        className='k'
        >Dashboard</motion.span>
       <div className="social">
      <a href="https://" target="_blank" rel="noopener noreferrer">
       Dashboard
      </a>
      <a href="https:/" target="_blank" rel="noopener noreferrer">
        ToDo
      </a>
      <a href="https://" target="_blank" rel="noopener noreferrer">
      Events
      </a>
    </div>
    
    
    </div>
        </div>
  );
};
