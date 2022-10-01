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
    if (imageRef.current) {
      setWidth(imageRef.current?.offsetWidth);
      setHeight(imageRef.current?.offsetHeight);
    }
  }, [imageRef]);

  useEffect(() => {
    if (video?.id !== id) {
      videoRef?.current?.pause()
      setShowing(false);
    }

    if (video && video.id === id) {
      setShowing(true);
    }
  }, [video]);

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
                id,
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
                  id,
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
        author || synopsis ? (
          <div className="infos">
            {
              synopsis ? (
                <div
                  onClick={() => {
                    setAudio({
                      src: synopsis.src,
                      title: synopsis.title,
                      subtitle: synopsis.subtitle,
                    });
                  }}
                  className="synopsis"
                >
                  {
                    synopsis.src ? (
                      <svg
                        className="audio-play"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#2a4f98"
                      >
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/>
                      </svg>
                    ) : null
                  }
                  <strong>{synopsis.title}</strong>
                </div>  
              ) : null
            }

            {
              author ? (
                <div
                  className="author"
                  onClick={() => {
                    if (!author.src) return;
    
                    setAudio({
                      src: author.src,
                      title: author.name,
                      place: author.place,
                    });
                  }}
                >
                  {
                    author.src ? (
                      <svg
                        className="audio-play"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#2a4f98"
                      >
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/>
                      </svg>  
                    ) : null
                  }
                  {author.name}
                </div>  
              ) : null
            }
          </div>
        ) : null
      }
    </div>
  )
};

export default VideoWrapper;
