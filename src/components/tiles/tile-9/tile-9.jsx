import React from 'react'
import './tile-9.css'

const Tile9 = () => (
  <div className="tile __9">
    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-9/illustrations/alberto.JPG" />
    
    <div className='video __1'>
      <div className="thumb-wrapper">
        <img draggable="false" className="thumb" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-9/film-thumbnail/depoimento3_frame_pb.png" />
        <svg className="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>

    <img draggable="false" className="photo __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-9/photos/GIF_2_D.png" />    

  </div>
);

export default Tile9;
