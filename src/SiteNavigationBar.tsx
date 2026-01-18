import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function SiteNavigationBar() {
  return (
    <Navbar expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand href='#home'>Jack S</Navbar.Brand>

        {/* TODO: Underline current section as user scrolls */}
        <Nav className="ms-auto">
          <Nav.Link href='#experience'>Experience</Nav.Link>
          <Nav.Link href='#education'>Education</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SiteNavigationBar;
