import React, { useContext, useLayoutEffect, useState } from 'react'
import Hammer from 'react-hammerjs';
import { actions, ModalsContext } from '../store';
import ContentModal from '../components/content-modal/content-modal';
import VideoPlayer from '../components/video-player/video-player';
import AudioPlayer from '../components/audio-player/audio-player';
import AboutText from './about-text/about-text';
import PartnersText from './partners-text/partners-text';
import Tile1 from '../components/tiles/tile-1/tile-1';
import Tile2 from '../components/tiles/tile-2/tile-2';
import Tile3 from '../components/tiles/tile-3/tile-3';
import Tile4 from '../components/tiles/tile-4/tile-4';
import Tile5 from '../components/tiles/tile-5/tile-5';
import Tile6 from '../components/tiles/tile-6/tile-6';
import Tile7 from '../components/tiles/tile-7/tile-7';
import Tile8 from '../components/tiles/tile-8/tile-8';
import Tile9 from '../components/tiles/tile-9/tile-9';
import Tile10 from '../components/tiles/tile-10/tile-10';
import Tile11 from '../components/tiles/tile-11/tile-11';
import Tile12 from '../components/tiles/tile-12/tile-12';
import Seo from '../components/seo'
import '../css/home.css';

const Layout = ({ language }) => {
  const { state, dispatch } = useContext(ModalsContext);
  const [openedContent, setOpenedContent] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const [zoom, setZoom] = useState(-2);
  const zoomStep = 1;

  useLayoutEffect(() => {
    setTimeout(() => setZoom(20), 200);
  }, []);

  useLayoutEffect(() => {
    const element = document.querySelector('.navigation-wrapper');
    const calcMaxWidth = element.scrollWidth - window.innerWidth;
    const calcMaxHeight = element.scrollHeight - window.innerHeight;

    let newX = 0;
    let newY = 0;
    
    if (x + deltaX < 0) newX = x + deltaX;
    if (Math.abs(x + deltaX) > calcMaxWidth) newX = -calcMaxWidth;

    if (y + deltaY < 0) newY = y + deltaY;
    if (Math.abs(y + deltaY) > calcMaxHeight) newY = -calcMaxHeight;

    element.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
  }, [deltaX, deltaY]);

  // useEffect(() => {
  //   const element = document.querySelector('.navigation-wrapper');
  //   const [centerX, centerY] = [element.clientWidth / 2, element.clientHeight / 2]
  //   console.log("CENTER_X",centerX)
  //   console.log("CENTER_Y", centerY)
  //   const deltaX = mousePosition.x - centerX;
  //   const deltaY = mousePosition.y - centerY;
  //   console.log('NEW_X', deltaX);
  //   console.log('NEW_Y', deltaY);
    
  //   const newX = centerX + (mousePosition.x - centerX);
  //   const newY = centerY + (mousePosition.y - centerY);
  //   console.log('NEW_X', newX);
  //   console.log('NEW_Y', newY);

  //   setX(newX)
  //   setY(newY)

  //   element.style.transform = `translate3d(${newX}px, ${newY}px, 0) scale(${zoom})`;
  // }, [zoom])

  const grid = []; 

  const zoomIn = () => {
    if (zoom === 20) return;
    setZoom(zoom + zoomStep)
  }

  const zoomOut = () => {
    if (zoom === -5) return;
    setZoom(zoom - zoomStep)
  }

  return (
    <>
      <Seo title="Home" />
      <div
        className="container"
      >
        <Hammer
          onPanEnd={(event) => {
            const element = document.querySelector('.navigation-wrapper');
            const calcMaxWidth = element.scrollWidth - window.innerWidth;
            const calcMaxHeight = element.scrollHeight - window.innerHeight;

            let newX = 0;
            let newY = 0;
            
            if (x + event.deltaX < 0) newX = x + event.deltaX;
            if (Math.abs(x + event.deltaX) > calcMaxWidth) newX = -calcMaxWidth;

            if (y + event.deltaY < 0) newY = y + event.deltaY;
            if (Math.abs(y + event.deltaY) > calcMaxHeight) newY = -calcMaxHeight ;

            setX(newX);
            setY(newY);
          }}
          onPan={(event) => {
            setDeltaX(event.deltaX);
            setDeltaY(event.deltaY);
          }}
        >
          <div
            className="navigation-wrapper"
            onWheel={(event) => {
              setMousePosition({ x: event.clientX, y: event.clientY })
              if (event.deltaY > 0) zoomOut();
              else zoomIn(); 
            }}
            style={{
              willChange: 'zoom',
              zoom: `${40 + zoom * 4}%`
            }}
          >
            <Tile1 state={state} dispatch={dispatch} />
            <Tile2 state={state} dispatch={dispatch} />
            <Tile3 state={state} dispatch={dispatch} />
            <Tile4 state={state} dispatch={dispatch} />
            <Tile5 state={state} dispatch={dispatch} />
            <Tile6 state={state} dispatch={dispatch} />
            <Tile7 state={state} dispatch={dispatch} />
            <Tile8 state={state} dispatch={dispatch} />
            <Tile9 state={state} dispatch={dispatch} />
            <Tile10 state={state} dispatch={dispatch} />
            <Tile11 state={state} dispatch={dispatch} />
            <Tile12 state={state} dispatch={dispatch} />
          </div>
        </Hammer>
      </div>
      {
        state.video ? (
          <VideoPlayer
            video={state.video}
            setVideo={(data) => {
              dispatch({
                type: actions.SET_VIDEO,
                data,
              });
            }}
          />
        ) : null
      }

      {
        state.audio ? (
          <AudioPlayer
            audio={state.audio}
            setAudio={(data) => {
              dispatch({
                type: actions.SET_AUDIO,
                data,
              });
            }}
          />
        ) : null
      }

      {
        state.about ? (
          <AboutText
            onClose={() => {
              dispatch({
                type: actions.CLOSE_ABOUT,
              });
            }}
          />
        ) : null
      }

      {
        state.partners ? (
          <PartnersText
            onClose={() => {
              dispatch({
                type: actions.CLOSE_PARTNERS,
              });
            }}
          />
        ) : null
      }

      <ContentModal
        hide={!openedContent}
        backgroundColor={openedContent?.backgroundColor}
        onClose={() => setOpenedContent(null)}
      />
    </>
  );
}

export default Layout;
