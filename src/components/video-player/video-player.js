import React from 'react';
import { status } from '../video/video';
import './video-player.style.css'

const VideoPlayer = ({ video, setVideo }) => (
  <div className="video-player">
    <button
      onClick={() => {
        if (video.status === status.PLAY) video.element.pause();
        if (video.status !== status.PLAY) video.element.play();

        setTimeout(() => {
          setVideo({
            element: video.element,
            status: video.status === status.PLAY ? status.PAUSE : status.PLAY,
          });
        }, 200)
      }}
    >
      {
        video.status === status.PLAY ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2A4F98"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2A4F98"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
        )
      }
    </button>
    
    <input
      type="range"
      value={video ? video.element.currentTime / video.element.duration * 100 : 0}
      min={0}
      max={100}
    />

    <button
      onClick={() => {
        video.element.pause();
        setTimeout(() => {
          setVideo(null);
        }, 200)
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2A4F98"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
    </button>
  </div>
);
  
VideoPlayer.defaultProps = {}
  
export default VideoPlayer;
