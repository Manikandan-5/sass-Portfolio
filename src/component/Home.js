import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
  return (
    <Navbar expand="lg">
      <Container className='mt-3'>
        <Navbar.Brand href="#home" className='logo text-info position: fixed'>Manikandan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className='bg-info'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-info">
          <Nav.Link href="#home"className="navtext text-info">Home</Nav.Link>
            <Nav.Link href="#About"className="navtext text-info">About me</Nav.Link>
            <Nav.Link href="#skills"className="navtext text-info">Skills</Nav.Link>
            <Nav.Link href="#project"className="navtext text-info">Projects</Nav.Link>
            <Nav.Link href="#contact"className="navtext text-info">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;