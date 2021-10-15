import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <Navbar className="bg-blue-light" expand="lg">
    <Container>
      <Nav className="me-auto d-flex justify-content-between flex-row w-100">
        <Nav.Item>
          <NavLink className="fw-bold m-3 text-decoration-none text-white" exact to="/">
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item className="text-decoration-none text-white">Covid Tracking app</Nav.Item>
        <Nav.Item>
          <span className="text-decoration-none text-white">
            <FontAwesomeIcon icon={faMicrophone} className="me-4" />
            <FontAwesomeIcon icon={faCog} />
          </span>
        </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
