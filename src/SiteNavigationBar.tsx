import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function SiteNavigationBar() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Nav className='me-auto'>
        <Nav.Link href='#home'>Jack S</Nav.Link>
      </Nav>

      <Nav className='ms-auto'>
        <Nav.Link href='#experience'>Experience</Nav.Link>
        <Nav.Link href='#Projects'>Projects</Nav.Link>
        <Nav.Link href='#Contact'>Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default SiteNavigationBar;
