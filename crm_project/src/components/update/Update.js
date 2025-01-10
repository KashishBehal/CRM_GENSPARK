import React from 'react'
import {Form , Button} from 'react-bootstrap';
import { PropTypes} from 'prop-types';
export const Update = ({
message,handleChange , handleOnSubmit}
) => {
  return (
   <Form onSubmit={handleOnSubmit}>
    <Form.Label>Reply</Form.Label>

    <Form.Text>Please reply your message here update the ticket</Form.Text>
    <Form.Control as="textarea"row='5' name='detail' value='message'

     onChange={handleChange}
    />

<Button variant='info type='submit>
Reply
</Button>



   </Form>
  )
}
Update.propTypes={
msg:
PropTypes.string.isRequired,
handleChange:PropTypes.func.isRequired,
handleOnSubmit:PropTypes.func.isRequired,
};