import React, { useLayoutEffect, useState } from "react"
import Hammer from 'react-hammerjs';
import ContentModal from "../components/content-modal/content-modal";
import Seo from "../components/seo"
import '../css/home.css';
import { contentsRow1, contentsRow2, contentsRow3, contentsRow4 } from "../models";

const renderContents = (contents, onClick) => 
  contents.map((content) => (
    <div 
      key={content.id}
      style={{ left: content.x, top: content.y, backgroundColor: content.backgroundColor }}
      className="content"
      onClick={() => onClick(content)}
    />
  )); 

const IndexPage = () => {
  const [openedContent, setOpenedContent] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);

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

    element.style.transform = `translate(${newX}px, ${newY}px)`;
  }, [deltaX, deltaY]);

  const grid = []; 
  
  return (
    <>
      <Seo title="Home" />
      <div className="container">
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
          }
        }>
          <div className="navigation-wrapper">
            <div>{renderContents(contentsRow1, (content) => setOpenedContent(content))}</div>
            <div>{renderContents(contentsRow2, (content) => setOpenedContent(content))}</div>
            <div>{renderContents(contentsRow3, (content) => setOpenedContent(content))}</div>
            <div>{renderContents(contentsRow4, (content) => setOpenedContent(content))}</div>
          </div>
        </Hammer>
      </div>
      <ContentModal
        hide={!openedContent}
        backgroundColor={openedContent?.backgroundColor}
        onClose={() => setOpenedContent(null)}
      />
    </>
  );
}

export default IndexPage
