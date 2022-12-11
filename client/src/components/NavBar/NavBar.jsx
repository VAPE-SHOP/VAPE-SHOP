import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

import './NavBar.css';
const NavBar = ({ size, user, Logout }) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    Logout();
    navigate('/login');
    window.location.reload(false);
  };
  return (
    <Navbar expand="lg" variant="dark" bg="black">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./src/assets/VAPE-SHOP.png"
            width="90"
            height="90"
            className="d-inline-block align-top image-navbar"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {user.role === 'ADMIN' ? (
              <Link class="nav-link active" aria-current="page" to="/admin">
                Admin
              </Link>
            ) : (
              ' '
            )}
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link active" to="/vapes">
              Vapes
            </Link>
            <Link className="nav-link active" to="/liquid">
              liquid Vaping
            </Link>
            <Link className="nav-link active" to="/About">
              About
            </Link>
            <Link className="nav-link active" to="/cart-shop">
              <button>
                <i className="fas fa-cart-plus"></i>
              </button>

              <span className="size-nav">{size}</span>
            </Link>
          </Nav>
          <Nav className="ms-auto">
            {!user.isConnected ? (
              <>
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
                <Link className="nav-link active" to="/register">
                  Register
                </Link>
              </>
            ) : (
              <Link className="nav-link active" onClick={logoutHandler}>
                logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
