import { useState, useEffect } from "react";

function PlayerComponent(props) {

  const [streamUrl, setStreamUrl] = useState();
  function stream() {
    let streamUrl = 'https://kut.streamguys1.com/kutx-free?cb=' + new Date().getTime();
    setStreamUrl(streamUrl);
  }

  useEffect(() => {
    stream();
  }, []);

  return (
    <div className="w-100">
      <audio id="stream" controls className="mx-auto" src={streamUrl}>
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );
}

export default PlayerComponent;