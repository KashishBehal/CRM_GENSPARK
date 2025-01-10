import React from 'react'
import { PropTypes } from 'prop-types'
import {Form , Col , Row} from 'react-bootstrap'
export const SearchForm = ({handleChange , str}) => {
  return (
    <div><Form>
        <Form.Group as ={Row}>
            <Form.Label column ms={2}>Search:</Form.Label>
            <Col>
            <Form.Control
            onChange={handleChange}
            value={str}
             ms="9" name="searchStr" 
             placeholder="Search ..."></Form.Control></Col>
        </Form.Group>
        </Form></div>
  )
}
SearchForm.propTypes={
    handleChange:PropTypes.func.isRequired
     , str:PropTypes.string.isRequired
}
