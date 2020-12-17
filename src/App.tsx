import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [startedPlaying, setStartedPlaying] = useState<boolean>(false);

  return (
    <Container>
      <VideoContainer>
        <ReactPlayer
          controls={playing}
          url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
          playing={playing}
          height="100%"
          width="100%"
          onError={(e: Error) => {
            console.error("onError", e);
          }}
        />
      </VideoContainer>

      {!startedPlaying && (
        <PlayButtonContainer>
          <button
            onClick={() => {
              setStartedPlaying(true);
              setPlaying(true);
            }}
          >
            Play
          </button>
        </PlayButtonContainer>
      )}
    </Container>
  );
}

export default App;

const PlayButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000077;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 450px;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
