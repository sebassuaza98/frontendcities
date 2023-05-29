import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (

    
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Ciudades</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/history">Historial</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
  );
}

export default Header;