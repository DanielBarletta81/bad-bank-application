import { InputGroup, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function AccountForm() {
  return (
<>
        <InputGroup className="me-auto">
        <FloatingLabel
        controlId="floatingInput"
        label="Enter Name"
          className="mb-auto">
          
        </FloatingLabel>
        <FloatingLabel>
        <Form.Control
          placeholder="Enter your Email"
          aria-label="Email"
          aria-describedby="inputEmail"
          />
        </FloatingLabel>
        
        <FloatingLabel
            controlId="floatingPassword"
            label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      
      </InputGroup>
      </>
  )
}
export default AccountForm;