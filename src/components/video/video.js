import { element } from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import './video.style.css';

export const status = {
  STOP: 'stop',
  PLAY: 'play',
  PAUSE: 'pause',
};

const VideoWrapper = ({
  setVideo, video, id, thumbnail,
  src, synopsis, author, setAudio,
}) => {
  const imageRef = useRef();
  const videoRef = useRef();
  const [showing, setShowing] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(imageRef.current?.offsetWidth);
    setHeight(imageRef.current?.offsetHeight);
  }, []);

  useEffect(() => {
    if (!video) setShowing(false);
  }, [video])

  return (
    <div className={`video-wrapper ${id}`}>
      {
        showing ? (
          <video
            ref={videoRef}
            className='video'
            autoPlay
            width={width}
            height={height}
            onTimeUpdate={({ target }) => {
              setVideo({
                element: target,
                status: status.PLAY,
              })
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <div
            className="thumb-wrapper"
            onClick={() => {
              setShowing(true);

              setTimeout(() => {
                setVideo({
                  element: videoRef.current,
                  status: status.PLAY,
                });
              }, [200]);
            }}
          >
            <img
              draggable="false"
              className="thumb"
              src={thumbnail}
              ref={imageRef}
              onLoad={() => {
                setWidth(imageRef.current?.offsetWidth);
                setHeight(imageRef.current?.offsetHeight);
              }}
            />
            <svg className="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"
            >
              <path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )
      }
      {
        author && synopsis ? (
          <div className="infos">
            <div
              onClick={() => {
                setAudio({
                  src: author.src,
                  title: synopsis.title,
                  subtitle: synopsis.subtitle,
                  place: author.place,
                });
              }}
              className="synopsis"
            >
              <svg
                className="audio-play"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2a4f98"
              >
                <path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/>
              </svg>
              <strong>{synopsis.title}</strong>
            </div>  

            <div
              className="author"
              onClick={() => {
                setAudio({
                  src: author.src,
                  title: synopsis.title,
                  subtitle: synopsis.subtitle,
                  place: author.place,
                });
              }}
            >
              <svg
                className="audio-play"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2a4f98"
              >
                <path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/>
              </svg>  
              {author.name}
            </div>  
          </div>
        ) : null
      }
    </div>
  )
};

export default VideoWrapper;
