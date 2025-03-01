import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaStar, FaBriefcase, FaPhone, FaEnvelope } from 'react-icons/fa';
import "./Nav.css"


function HorizontalNavbar() {
  return (
    <Navbar variant="dark" expand="lg" className="w-100 p-3 nav-color">
      <Container>
        <Navbar.Brand href="#home">Javeria Mumtaz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white"><FaHome className="me-2" /> Home</Nav.Link>
            <Nav.Link href="#features" className="text-white"><FaStar className="me-2" /> Services</Nav.Link>
            <Nav.Link href="#work" className="text-white"><FaBriefcase className="me-2" /> Work</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="tel:+1234567890" className="text-white"><FaPhone className="me-2" /> +923 24 67 890</Nav.Link>
            <Nav.Link href="mailto:info@example.com" className="text-white"><FaEnvelope className="me-2" /> info@javemumtaz.com</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HorizontalNavbar;
