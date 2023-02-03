import Accordion from 'react-bootstrap/Accordion';

function FullPlaylist(props) {
  return (
    <Accordion flush>
        {props.tracklist.map((track, index) => (
            <div key={index} className="border-bottom">
                <Accordion.Item eventKey={index}>
                <Accordion.Header>{track.song.artistName} - {track.song.trackName}</Accordion.Header>
                <Accordion.Body>
                    <p>Artist: {track.song.artistName}</p>
                    <p>Song: {track.song.trackName}</p>
                    <p>Collection: {track.song.CollectionName}</p>
                    <p>Start: {track.song_start_time}</p>
                </Accordion.Body>
                </Accordion.Item>
            </div>
         ))}
    </Accordion>
  );
}

export default FullPlaylist;