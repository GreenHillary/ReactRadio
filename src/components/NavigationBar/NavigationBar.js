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
            <Navbar.Brand href="#">KUTX Radio{props.show && ' - ' + props.show}{props.DJName && ' - ' + props.DJName}</Navbar.Brand>
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
                <a href={props.showUrl} target="_blank" rel="noreferrer">{props.DJName}</a>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 text-center w-75 mx-auto">
                  <h2>Now Playing</h2>
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