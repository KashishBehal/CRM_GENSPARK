import React from 'react'
import {Header} from './partial/header';
import { Footer } from './partial/footer';

import './defaultlayout.css';
// import { Dash } from './partial/d';
export const Defaultlayout = ({children}) => {
  return (
    <div className='default-layout'>
        <header className='header'>
        <Header/>
        </header> 
        <main className='main'>{children}</main>
          
       <footer className='footer'> <Footer/></footer>
    </div>
  )
}
