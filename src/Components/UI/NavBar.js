import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar(){

    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">Conferences-Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sessions/">Sessions</Nav.Link>
            <Nav.Link href="/speakers/">Speakers</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        </>
        );
}

export default NavBar;

