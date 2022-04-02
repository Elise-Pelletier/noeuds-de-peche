// == Import
import './footer.scss';
import {
  Nav,
} from 'react-bootstrap';

// Import des composants bootstrap

// == Composant
const Footer = () => (

  <Nav id="nav">
    <Nav.Link id="nav-link" eventKey="link-1">Link</Nav.Link>
    <Nav.Link id="nav-link" eventKey="link-2">Link</Nav.Link>
  </Nav>
);

// == Export
export default Footer;
