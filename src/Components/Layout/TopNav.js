import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import './TopNav.css';
import Logo from '../Images/Logo.jpg';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TopNav() {
    const[logState, useLogState]=useState(0);
    const id=sessionStorage.getItem("userId");
    const name=sessionStorage.getItem("name");
    var navigate = useNavigate();
    const Logout=()=>
  {
    sessionStorage.setItem("userId",0);
    sessionStorage.setItem("role",0);
    sessionStorage.setItem("name",0);
    navigate("/");
  }
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Brand href="#home"><img src={Logo} style={{width:"70px",height:"70px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" >
              Home
            </Nav.Link>
            <Nav.Link href="/aboutus">
              About Us
            </Nav.Link>
            <Nav.Link href="/contactus" >
              Contact Us
            </Nav.Link>
            {id == 0 ? (
              <Nav.Link href="/login" >
                Login/Signup
              </Nav.Link>
            ) : (
              <Nav.Link onClick={Logout}>
                Logout
              </Nav.Link>
            )}
            {id != 0 ? (
              <Nav.Link className='namewelcome'>
                Welcome,{name}
              </Nav.Link>
            ) : (
              " "
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
export default TopNav;


/*
<Navbar bg="light" className='nav' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img className='nav-img' src={Logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-text-top">Home</Nav.Link>
            <Nav.Link href="/aboutus" className="nav-text-top">About Us</Nav.Link>
            <Nav.Link href="/contactus" className="nav-text-top">Contact Us</Nav.Link>
            {id==0?<Nav.Link href='/login' className="nav-text-top">Login</Nav.Link>:<Nav.Link onClick={Logout} className="nav-text-top">Logout</Nav.Link> }
             {(id!=0)?(<Nav.Link className="nav-text-top nav-name">Welcome,{name}</Nav.Link>): " "} 
            
             
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar> 

*/