import React, { useContext, useLayoutEffect, useState } from 'react'
import Hammer from 'react-hammerjs';
import { actions, ModalsContext } from '../store';
import ContentModal from '../components/content-modal/content-modal';
import VideoPlayer from '../components/video-player/video-player';
import AudioPlayer from '../components/audio-player/audio-player';
import AboutText from './about-text/about-text';
import PartnersText from './partners-text/partners-text';
import CtiText from './cti-text/cti-text';
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
  const [loaded, setLoaded] = useState([
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const [zoom, setZoom] = useState(0);
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

    const base = 1400;

    const newLoaded = [...loaded];

    const row2 = newY * -1 > base / 2;
    const row3 = newY * -1 > 1.5;

    const column2 = newY * -1 > base / 2
    const column3 = newX * -1 > 1.5;
    const column4 = newX * -1 > 2.5;

    if (column3) {
      newLoaded[2] = true;
    }

    if (column4) {
      newLoaded[3] = true;
    }
    
    if (row3) {
      newLoaded[8] = true;
    }

    if (row2) {
      newLoaded[4] = true;
    }

    if (row2 && column3) {
      newLoaded[6] = true;
    }
    
    if (row2 && column4) {
      newLoaded[7] = true;
    }

    if (row2 && column3) {
      newLoaded[6] = true;
    }
    
    if (row3 && column4) {
      newLoaded[9] = true;
    }

    if (row3 && column3) {
      newLoaded[10] = true;
    }
    
    if (row3 && column4) {
      newLoaded[11] = true;
    }

    setLoaded(newLoaded);
  }, [deltaX, deltaY]);

  const grid = []; 

  const zoomIn = () => {
    if (zoom === 20) return;
    setZoom(zoom + zoomStep)
  }

  const zoomOut = () => {
    if (zoom === 0) return;
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
            {
              loaded[0] ? (
                <Tile1 state={state} dispatch={dispatch} />
              ) : null
            }
            {
              loaded[1] ? (
                <Tile2 state={state} dispatch={dispatch} />
              ) : null
            }
            {
              loaded[2] ? (
                <Tile3 state={state} dispatch={dispatch} />
              ) : null
            }
            {
              loaded[3] ? (
                <Tile4 state={state} dispatch={dispatch} />
              ) : null
            }
            {
              loaded[4] ? (
                <Tile5 state={state} dispatch={dispatch} />
              ) : null
            }
            {
              loaded[5] ? (
                <Tile6 state={state} dispatch={dispatch} />
            ) : null
            }
            {
              loaded[6] ? (
                <Tile7 state={state} dispatch={dispatch} />
              ) : null
            }
            {
              loaded[7] ? (
                <Tile8 state={state} dispatch={dispatch} />
              ) : null
            }
            {
              loaded[8] ? (
                <Tile9 state={state} dispatch={dispatch} />
              ) : null
            }
            {
              loaded[9] ? (
                <Tile10 state={state} dispatch={dispatch} />
              ) : null
            }
            {
              loaded[10] ? (
                <Tile11 state={state} dispatch={dispatch} />
              ) : null
            }
            {
              loaded[11] ? (
                <Tile12 state={state} dispatch={dispatch} />
              ) : null
            }
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
            language={state.language}
            onClose={() => {
              dispatch({
                type: actions.CLOSE_ABOUT,
              });
            }}
          />
        ) : null
      }
      
      {
        state.cti ? (
          <CtiText
            language={state.language}
            onClose={() => {
              dispatch({
                type: actions.CLOSE_CTI,
              });
            }}
          />
        ) : null
      }

      {
        state.partners ? (
          <PartnersText
            language={state.language}
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
