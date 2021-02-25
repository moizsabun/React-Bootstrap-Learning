import React from 'react'
import {  Image, Form , Button} from 'react-bootstrap';
import styles  from "../../App.css";
export default function Home() {
    return (
        <div className="container-fluid bg">
        <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">  </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
            
            
            <Form className="form-container">
            <h1> LDC PORTAL LOGIN</h1>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button  type="submit" className="btn btn-success btn-block"> 
    Submit
  </Button>
</Form>
            
            
            
            
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12"></div>
        </div>
       {/**  <Image src="https://assets.digitalocean.com/labs/images/community_bg.png" />
        <h1>Hello Wolrd</h1>*/}
        </div>
    )
}
