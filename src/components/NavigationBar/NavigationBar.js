import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavigationBar(props) {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="shadow" sticky="fixed">
          <Container fluid>
            <Navbar.Brand href="#">KUTX Radio</Navbar.Brand>
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
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 text-center w-75 mx-auto">
                  <h4>Now Playing</h4>
                  {props.currentTrack.artworkUrl100
                    ? <img src={props.currentTrack.artworkUrl100} alt="song cover" width="100" className='mx-auto' />
                    : <img src="https://place-puppy.com/100x100" alt="song cover" width="100" className='mx-auto' />
                  }
                  <div className='pt-3'>
                    <h5>Artist:</h5>
                    <p>{props.currentTrack.artistName}</p>
                    <h5>Song:</h5>
                    <p>{props.currentTrack.trackName}</p>
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