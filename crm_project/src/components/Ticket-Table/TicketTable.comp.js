import React from 'react';
import '../recent.css';

export const TicketTable = ({tickets}) => {
  return (
   <div striped border hover className='tab'>
   
{/* <tr className='c'>
    
    <th>#</th>
    <th>Subjects</th>
    <th>Status</th>
    <th>Opened Date</th>
</tr> */}

<tbody className='b'>
<tr className='c'>
    
    <th>#</th>
    <th>Subjects</th>
    <th>Status</th>
    <th>Opened Date</th>
</tr>
    {tickets.length ? tickets.map((row)=>(
         <tr key={row.id} className='c'>
        
         <td className='d'>{row.id}</td>
         <td>{row.subject}</td>
         <td>{row.status}</td>
         <td>{row.addedAt}</td>
        
     </tr>
    )):(
    <tr>
        <td colSpan="4" className='text-center'>
         No ticket to show
        </td>
    </tr>)}
</tbody>
   </div>
  );
};
