import { useState, useEffect } from "react";
import axios from 'axios';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import FullPlaylist from "./components/FullPlaylist/FullPlaylist";

function App() {

  const [tracklist, setTracklist] = useState([]);

  const getTracklist = async () => {
    try {
      let tracklistArray = await axios.get("https://api.composer.nprstations.org/v1/widget/50ef24ebe1c8a1369593d032/tracks?format=json&limit=20");
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

  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <FullPlaylist tracklist={tracklist}/>
      </header>
    </div>
  );
}

export default App;

