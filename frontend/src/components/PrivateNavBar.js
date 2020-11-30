import React from 'react';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap'


const NavBar = props => {
  return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">IS-COVID</Navbar.Brand>
            <Nav>
              <NavDropdown title={props.name} id="collasible-nav-dropdown">
						  	<NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
						  	<NavDropdown.Item href="/SignOut">Sign Out</NavDropdown.Item>
						  </NavDropdown>
              <Nav.Link href="/info">Información</Nav.Link>
              <Nav.Link href="/myinfo">Mi Información</Nav.Link>
            </Nav>
      </Navbar>
  );
}
export default NavBar;

