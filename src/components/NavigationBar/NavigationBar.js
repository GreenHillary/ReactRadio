import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PlayerComponent from '../PlayerComponent/PlayerComponent';

function NavigationBar(props) {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="shadow" sticky="top">
          <Container fluid>
            <Navbar.Brand href="#">KUTX Radio - {props.show}</Navbar.Brand>
            <span><PlayerComponent /></span>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  KUTX
                </Offcanvas.Title>
                <a href={props.showUrl} target="_blank" rel="noreferrer">{props.show}</a>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <h2>Currently Playing</h2>
                  <img src="https://place-puppy.com/240x240" alt="song cover"></img>
                  <div>
                    <p>Artist: {props.currentTrack.artistName}</p>
                    <p>Song: {props.currentTrack.trackName}</p>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;