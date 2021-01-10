import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

function Header() {
  return <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="http://localhost:3000">Weight Lifting</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="http://localhost:3000">View All Exercises</Nav.Link>
        <Nav.Link href="http://localhost:8080/add-exercise">Add A New Exercise</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>;
}

export default Header;
