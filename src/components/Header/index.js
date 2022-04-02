// == Import
import './header.scss';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';

// Import des composants bootstrap

// == Composant
const Header = () => (

  <Navbar id="navbar" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link id="nav-link" href="#home">Acceuil</Nav.Link>
          <Nav.Link id="nav-link" href="#link">Pêche en mer</Nav.Link>
          <Nav.Link id="nav-link" href="#link">Pêche en rivière</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

// == Export
export default Header;
