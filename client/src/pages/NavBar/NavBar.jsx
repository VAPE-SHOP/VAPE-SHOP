import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link ,useNavigate} from 'react-router-dom';
const NavBar = ({user,Logout}) => {
  const navigate = useNavigate()
  const logoutHandler =()=>{
   Logout()
  navigate('/login')
  window.location.reload(false);
  }
  return (
    <Navbar bg="light" expand="md">
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
          <Nav className="ms-auto">
        {
                user.role === "ADMIN" ? (
                     <Link class="nav-link active" aria-current="page" to="/admin">Admin</Link>
                 ) : " "
             }
      
        
             
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link active"  to="/vapes">Vapes</Link>
            <Link className="nav-link active" to="/liquid">liquid Vaping</Link>
            {
               !user.isConnected ? (
                <>
            <Link className="nav-link active"   to="/login">Login</Link>
            <Link className="nav-link active"   to="/register">Register</Link>
            </>):(
            <Link  className="nav-link active"   onClick={logoutHandler}>logout</Link>)
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
