import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router";
export function Footer1() {
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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-Farming</Navbar.Brand>
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
                Login
              </Nav.Link>
            ) : (
              <Nav.Link onClick={Logout}>
                Logout
              </Nav.Link>
            )}
            {id != 0 ? (
              <Nav.Link >
                Welcome,{name}
              </Nav.Link>
            ) : (
              " "
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
