import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imgLogo from "../images/logos/Vector.svg";



const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={imgLogo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="WikiIdeas logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Nosotros</Nav.Link>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">FrontEnd</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">BackEnd</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Diseño UX y UI</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Test</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.5">
              Genera tu Propia Categoría
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;
