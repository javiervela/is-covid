import React from 'react';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'


const NavBar = () => {
  return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">IS-COVID</Navbar.Brand>
            <Nav>
              <NavDropdown title="Account" id="collasible-nav-dropdown">
						  	<NavDropdown.Item href="/login">Log In</NavDropdown.Item>
						  	<NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
						  </NavDropdown>
            </Nav>
      </Navbar>
  );
}
export default NavBar;
