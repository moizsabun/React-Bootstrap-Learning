import React from 'react'
import {  Nav,Navbar,NavDropdown,Form , FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

export default function header() {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark"  expand="lg"  >
  <Navbar.Brand href="#home">LDC Portal</Navbar.Brand>
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
     
      <NavDropdown title="Load Shedding" id="basic-nav-dropdown">
      <LinkContainer to="/LoadShedding">
      <NavDropdown.Item >Add Load Shedding</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Divider />
      <LinkContainer to="/LoadSheddingArchive">
      <NavDropdown.Item>Load Shedding Archive</NavDropdown.Item>
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
