import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./src/assets/VAPE-SHOP.png"
            width="90"
            height="90"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/vapes">Vapes</Nav.Link>
            <Nav.Link href="/liquid">liquid Vaping</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/sginin">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
