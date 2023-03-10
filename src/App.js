import { useState, useEffect } from "react";
import axios from 'axios';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import FullPlaylist from "./components/FullPlaylist/FullPlaylist";
import NowPlaying from "./components/NowPlaying/NowPlaying"

function App() {
  const [showName, setShowName] = useState();
  const [showUrl, setShowUrl] = useState();
  const [currentTrack, setCurrentTrack] = useState();
  const [titleString, setTitleString] = useState();
  const [DJName, setDJName] = useState();
  const [tracklist, setTracklist] = useState([]);

  const getTracklist = async () => {
    try {
      let tracklistArray = await axios.get("https://api.composer.nprstations.org/v1/widget/50ef24ebe1c8a1369593d032/tracks?format=json&limit=20");
      setShowUrl(tracklistArray.data.onNow.program.program_link);
      setShowName(tracklistArray.data.onNow.program.name);
      setCurrentTrack(tracklistArray.data.onNow.song);

      if (tracklistArray.data.onNow.song) {
        setTitleString(tracklistArray.data.onNow.song.artistName + " - " + tracklistArray.data.onNow.song.trackName);
        if(tracklistArray.data.onNow.program.hosts[0]) {
          setDJName(tracklistArray.data.onNow.program.hosts[0].name);
        }
      } else {
        setTitleString(tracklistArray.data.tracklist.results[0].song.artistName + " - " + tracklistArray.data.tracklist.results[0].song.trackName);
      }

      setTracklist(tracklistArray.data.tracklist.results);
      tracklistArray = tracklistArray.data.tracklist.results;
      setTracklist(tracklistArray);
    } catch (err) {
      console.error(err.message);
    }
  };

 

  useEffect(() => {
    getTracklist();
    const interval = setInterval(() => {
      getTracklist();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const changePageTitle = async () => {
    document.querySelector('title').textContent = titleString;
  }
  changePageTitle();

  useEffect(() => {
    const interval = setInterval(() => {
      changePageTitle();
    }, 10000);
    return () => clearInterval(interval);
  }, );

  return (
    <div className="App">
        <title>{titleString?titleString: 'KUTX'}</title>
      <header className="App-header">
        <NavigationBar
          currentTrack={currentTrack?currentTrack:''}
        />
        <NowPlaying
          currentTrack={currentTrack?currentTrack:''}
          tracklist={tracklist}
          show={showName}
          DJName={DJName}
        />
        <FullPlaylist
          tracklist={tracklist} currentTrack={currentTrack?currentTrack:''}
        />
      </header>
    </div>
  );
}

export default App;

