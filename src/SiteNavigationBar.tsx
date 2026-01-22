import {Nav, Navbar, Container} from 'react-bootstrap';

function SiteNavigationBar() {
  return (
    <Navbar expand="lg" fixed='top'>
      <Container fluid>
        <Navbar.Brand href='#home'>Jack S</Navbar.Brand>

        {/* TODO: Underline current section as user scrolls */}
        <Nav className="ms-auto">
          <Nav.Link href='#experience'>Experience</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
          <Nav.Link href='#education'>Education</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SiteNavigationBar;
