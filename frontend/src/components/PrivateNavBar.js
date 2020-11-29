import React from 'react';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'


const NavBar = props => {
  return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">IS-COVID</Navbar.Brand>
            <Nav>
              <NavDropdown title={props.name.email} id="collasible-nav-dropdown">
						  	<NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
						  	<NavDropdown.Item href="#action/3.2">Sign Out</NavDropdown.Item>
						  </NavDropdown>
            </Nav>
      </Navbar>
  );
}
export default NavBar;

