import React, { useEffect, useState } from 'react';
import { status } from '../video/video';
import './audio-player.style.css'

const AudioPlayer = ({ audio, setAudio }) => {
  const [element, setElement] = useState(null);
  const [audioStatus, setAudioStatus] = useState(status.PLAY)
  const [currentTime, setCurrentTime] = useState(0)
  
  useEffect(() => {
    const audioElement = new Audio(audio.src);
    audioElement.play();

    audioElement.ontimeupdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    setElement(audioElement);

    return () => {
      audioElement.pause();
    };
  }, []);

  useEffect(() => {
    if (element) {
      element.pause()
      element.currentTime = 0;
      element.src = audio.src;
      element.play();
    }
  }, [audio]);

  return (
    <div className="audio-player-wrapper">
      <div className="infos">
        <div className="title">{audio.title}</div>
        <div className="subtitle">/ {audio.subtitle}</div>
        <p className="place"><span>local</span> {audio.place}</p>
      </div>
      <div className="audio-player">
        <button
          onClick={() => {
            if (audioStatus === status.PLAY) {
              element.pause();
              setAudioStatus(status.PAUSE);
            }

            if (audioStatus !== status.PLAY) {
              element.play();
              setAudioStatus(status.PLAY);
            }
          }}
        >
          {
            audioStatus === status.PLAY ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2A4F98"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2A4F98"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
            )
          }
        </button>
        
        <input
          type="range"
          value={element?.duration && currentTime ? currentTime / element.duration * 100 : 0}
          min={0}
          max={100}
        />

        <button
          onClick={() => {
            element.pause();
            setAudio(null);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2A4F98"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
    </div>
  );
};

AudioPlayer.defaultProps = {}
  
export default AudioPlayer;
