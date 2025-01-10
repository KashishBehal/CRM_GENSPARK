import React from 'react';
import './entrycss.css';
import {Container} from "react-bootstrap"
import {Login} from '../../components/loginregister/login';
 export const Entry = () => {
  return (
    <div className='entry-page '>
    <Container className='a'><Login/></Container>
    </div>
  )
}

