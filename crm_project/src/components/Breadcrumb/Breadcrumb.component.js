import * as React from 'react';
import { Breadcrumb } from 'react-bootstrap';



export const  Breadcrumbss=({page})=> {
  return (
    
      <Breadcrumbss aria-label="breadcrumb">
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
      </Breadcrumbss>
    
  );
}
