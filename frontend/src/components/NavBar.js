import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav} from 'react-bootstrap'


const NavBar = () => {
  return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">IS-COVID</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
}
export default NavBar;
