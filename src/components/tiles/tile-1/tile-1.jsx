import React from 'react'
import './tile-1.css'

const Tile1 = () => (
  <div className="tile __1">
    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/illustrations/desenho-Sophia05.jpg" />

    <div className='video __1'>
      <div className="thumb-wrapper">
        <img draggable="false" className="thumb" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/film-thumbnail/filme+1_Nhemongarai+BATISMO+DA+ALMA_pb.png" />
        <svg className="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>

    <div className='video __2'>
      <div className="thumb-wrapper">
        <img draggable="false" className="thumb" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/film-thumbnail/depoimento1_frame_pb.png" />
        <svg className="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>

    <img draggable="false" className="gif __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/photos/GIF+1_Opy+D+novo.png" />

    <img draggable="false" className="gif __2" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/illustrations/galinhas.png" />
  </div>
);

export default Tile1;
