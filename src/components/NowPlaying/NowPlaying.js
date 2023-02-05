import PlayerComponent from '../PlayerComponent/PlayerComponent';
import './NowPlaying.scss'

function NowPlaying(props) {
  return (
    <div id='nowPlaying' className='p-3 shadow sticky-top'>
      <div className='text-center'>
        <div className='row'>
          <div className='col'>
            <p className="h4">{props.show}</p>
            <p className="h5">{props.DJName}</p>
            {props.currentTrack.artworkUrl100
            ? <img src={props.currentTrack.artworkUrl100} alt="song cover" width="100" className='mx-auto mb-1'/>
            : <img src="https://place-puppy.com/100x100" alt="missing song cover" width="100" className='mx-auto mb-1'/>
            }
            <div className='py-1'><PlayerComponent /></div>
            <h6>
              {props.currentTrack.artistName ? props.currentTrack.artistName + ' - ' + props.currentTrack.trackName : ''}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NowPlaying;