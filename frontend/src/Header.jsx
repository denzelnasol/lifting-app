import React from "react";
import {Navbar, Nav, Row, Jumbotron, Container} from 'react-bootstrap';

function Header() {
  return (
    <div className="container-fluid">
      <header>
        <Navbar expand="lg">
          <Navbar.Brand href="http://localhost:3000">Weight Lifting</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link class="nav-item" href="#exercises">View All Exercises</Nav.Link>
            <Nav.Link href="http://localhost:8080/add-exercise">Add A New Exercise</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>;

        <Jumbotron fluid>
          <Container>
            <Row>
              <div>
                <h1 class="big-heading container-fluid">Find new and interesting weight-lifting exercises.</h1>
              </div>
            </Row>
          </Container>
        </Jumbotron>
    </div>
  );
}

export default Header;
