import Accordion from 'react-bootstrap/Accordion';

function FullPlaylist(props) {
  return (
    <Accordion flush>
      <div key='currentTrack' className={props.currentTrack ? 'border-bottom current-track' : 'd-none'}>
        <Accordion.Item eventKey='currentTrack'>
          <Accordion.Header>{props.currentTrack.artistName} - {props.currentTrack.trackName}</Accordion.Header>
          <Accordion.Body>
            <div className='row'>
              <div className='col col-12 col-md-4' style={{ "maxWidth": 120 }}>
                {props.currentTrack.artworkUrl100
                  ? <img src={props.currentTrack.artworkUrl100} alt={props.currentTrack.trackName} width="100" className='mx-auto' />
                  : <img src="https://place-puppy.com/100x100" alt="missing song cover" width="100" className='mx-auto' />
                }
              </div>
              <div className='col col-12 col-md-4' >
                <p>Artist: {props.currentTrack.artistName}</p>
                <p>Song: {props.currentTrack.trackName}</p>
                <p>Collection: {props.currentTrack.collectionName}</p>
              </div>
              <div className='col col-12 col-md-4' >
                <p>Start: {props.currentTrack._start_time}</p>
                <p>Duration: {props.currentTrack._duration/60000}</p>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </div>

      {props.tracklist.map((track, index) => (
        <div key={index} className="border-bottom">
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{track.song.artistName} - {track.song.trackName}</Accordion.Header>
            <Accordion.Body>
              <div className='row'>
                <div className='col' style={{ "maxWidth": 120 }}>
                  {props.currentTrack.artworkUrl100
                    ? <img src={props.currentTrack.artworkUrl100} alt={props.currentTrack.trackName} width="100" className='mx-auto' />
                    : <img src="https://place-puppy.com/100x100" alt="missing song cover" width="100" className='mx-auto' />
                  }
                </div>
                <div className='col' >
                  <p>Artist: {track.song.artistName}</p>
                  <p>Song: {track.song.trackName}</p>
                  <p>Collection: {track.song.collectionName}</p>
                  <p>Start: {track.song._start_time}</p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </div>

      ))}
    </Accordion>
  );
}

export default FullPlaylist;