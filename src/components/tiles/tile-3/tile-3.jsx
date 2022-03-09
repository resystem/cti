import React from 'react'
import './tile-3.css'

const Tile3 = () => (
  <div className="tile __3">
    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/illustrations/forma_3.png" />
    
    <img draggable="false" className="photo __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/photos/GIF_3_A.png" />    

    <img draggable="false" className="illustration __2" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/illustrations/desenho-Sophia13.jpg" />

    <img draggable="false" className="illustration __3" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/illustrations/desenho-Sophia07.jpg" />

    <div className='video __1'>
      <div className="thumb-wrapper">
        <img draggable="false" className="thumb" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/film-thumbnail/filme5_Ayvu_Nhexyro_pb.png" />
        <svg className="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>
    
  </div>
);

export default Tile3;
