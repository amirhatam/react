import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";










class App extends React.Component {
  

  render() {
    return (
      <div className=" d-flex flex-column align-items-center p-5" >
         <Form className="p-5" >
          <Form.Group  controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"  placeholder="Enter email" />
          </Form.Group>

      

          <Form.Group  controlId="formBasicPassword">
            <Form.Label >Password</Form.Label>
            <Form.Control  type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group  controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>


          
        </Form> 
      </div>
    );
  }
}

export default App;
