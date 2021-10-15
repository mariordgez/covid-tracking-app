import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      name: 'Home',
    },
    {
      id: 2,
      path: '/',
      name: 'Countries',
    },
  ];
  return (
    <Navbar className="bg-blue-light" expand="lg">
      <Container>
        <Nav className="me-auto d-flex justify-content-between flex-row w-100">
          {links.map((link) => (
            <Nav.Item key={link.id}>
              <NavLink className="fw-bold m-3 text-decoration-none text-white" exact to={link.path}>
                {link.name}
              </NavLink>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
