import Accordion from 'react-bootstrap/Accordion';

function FullPlaylist(props) {
  return (
    <Accordion flush>
      
            <div key='currentTrack' className={props.currentTrack ? 'border-bottom current-track': 'd-none'}>
                <Accordion.Item eventKey={'currentTrack'}>
                <Accordion.Header>{props.currentTrack.artistName} - {props.currentTrack.trackName}</Accordion.Header>
                <Accordion.Body>
                    <p>Artist: {props.currentTrack.artistName}</p>
                    <p>Song: {props.currentTrack.trackName}</p>
                    <p>Collection: {props.currentTrack.collectionName}</p>
                    <p>Start: {props.currentTrack._start_time}</p>
                </Accordion.Body>
                </Accordion.Item>
            </div>

            {props.tracklist.map((track, index) => (
            <div key={index} className="border-bottom">
                <Accordion.Item eventKey={index}>
                <Accordion.Header>{track.song.artistName} - {track.song.trackName}</Accordion.Header>
                <Accordion.Body>
                    <p>Artist: {track.song.artistName}</p>
                    <p>Song: {track.song.trackName}</p>
                    <p>Collection: {track.song.collectionName}</p>
                    <p>Start: {track.song._start_time}</p>
                </Accordion.Body>
                </Accordion.Item>
            </div>
                  
         ))}
    </Accordion>
  );
}

export default FullPlaylist;