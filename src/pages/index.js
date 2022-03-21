import React, { useLayoutEffect, useState } from 'react'
import Hammer from 'react-hammerjs';
import ContentModal from '../components/content-modal/content-modal';
import VideoPlayer from '../components/video-player/video-player';
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

const IndexPage = () => {
  const [openedContent, setOpenedContent] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const [zoom, setZoom] = useState(1);
  const zoomStep = 0.1;

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
    if (zoom === 1) return;
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
              if (event.deltaY > 0) zoomIn();
              else zoomOut(); 
            }}
            style={{
              transition: `transform ease-out 200ms`,
              touchAction: 'none',
              willChange: 'transform',
            }}
          >
            <Tile1 />
            <Tile2 />
            <Tile3 />
            <Tile4 />
            <Tile5 />
            <Tile6 />
            <Tile7 />
            <Tile8 />
            <Tile9 />
            <Tile10 />
            <Tile11 />
            <Tile12 />
          </div>
        </Hammer>
      </div>
      <VideoPlayer />
      <ContentModal
        hide={!openedContent}
        backgroundColor={openedContent?.backgroundColor}
        onClose={() => setOpenedContent(null)}
      />
    </>
  );
}

export default IndexPage
