import React, { useLayoutEffect, useState } from "react"
import Hammer from 'react-hammerjs';
import Seo from "../components/seo"
import '../css/home.css';

const IndexPage = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);

  useLayoutEffect(() => {
    const element = document.querySelector('.navigation-wrapper');
    element.style.transform = `translate(${x + deltaX}px, ${y + deltaY}px)`;
  }, [deltaX, deltaY]);
  
  return (
    <>
      <Seo title="Home" />
      <div className="container">
        <Hammer
          onPanEnd={(event) => {
            setX(x + event.deltaX);
            setY(y + event.deltaY);
          }}
          onPan={(event) => {
            setDeltaX(event.deltaX);
            setDeltaY(event.deltaY);
          }
        }>
          <div className="navigation-wrapper">
            <div />
            <div />
            <div />
            <div />
          </div>
        </Hammer>
      </div>
    </>
  );
}

export default IndexPage
