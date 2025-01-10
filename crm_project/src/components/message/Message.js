import React from 'react';
import PropTypes, { propTypes } from 'prop-types';
import './message.css';
export const Message = ({msg}) => {
  return msg.map((row , i)=>(
    <div  key={i} className='msg mt-3'>
        <div className='send fot-weight-bold text-secondary'>
            <div className='sender'>{row.messageBy}</div>
<div className='date'>{row.date}</div>
        </div>
        <div className='message'>{row.message}</div>
    </div>
  ))
}
Message.propTypes={
    msg:PropTypes.array.isRequired
}