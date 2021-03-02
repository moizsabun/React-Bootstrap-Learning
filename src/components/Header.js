import React from 'react'
import {  Nav,Navbar,NavDropdown,Form , FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import Masterdata from './Pages/Masterdata';
import MasterdataArchive from './Pages/MasterdataArchive';
export default function header() {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark"  expand="lg"  >
  <Navbar.Brand href="#home">LDC Shutdown</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Master data" id="basic-nav-dropdown" >
        <LinkContainer to="/Masterdata">
        <NavDropdown.Item>Add Master Data</NavDropdown.Item>
        </LinkContainer>
      <NavDropdown.Divider />
      <LinkContainer to = "/MasterdataArchive">
     
        <NavDropdown.Item >Master Data Archive</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
      <Nav.Link href="#link"></Nav.Link>
     
      <NavDropdown title="Shutdown" id="basic-nav-dropdown">
      <LinkContainer to="/Shutdown">
      <NavDropdown.Item >Add Shutdown</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Divider />
      <LinkContainer to="/ShutdownArchive">
      <NavDropdown.Item>Shutdown Archive</NavDropdown.Item>
      </LinkContainer>
      </NavDropdown>
    </Nav>
    <Nav className="justify-content-end">
    <Nav.Item>
      <Nav.Link>
        Logout
      </Nav.Link>
    </Nav.Item>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
  
</Navbar>
    )
}
