import React from 'react'
import { actions } from '../../../store';
import VideoWrapper from '../../video/video';
import './tile-8.css'

const video1 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-8/videos/depoimento5.mp4',
};

const Tile8 = ({ state, dispatch }) => (
  <div className="tile __8">
    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-8/illustrations/bocasouvidos.jpg" />
    
    <img draggable="false" className="photo __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-8/photos/GIF_5_C.png" />    

    <VideoWrapper
      id="__1"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/tile-8/film-thumbnail/depoimento5_frame_pb.png"
      src={video1[state.language]}
      setVideo={(data) => {
        dispatch({
          type: actions.SET_VIDEO,
          data,
        })
      }}
    />

    <img draggable="false" className="illustration __2" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-8/illustrations/Kerexu_IMG_8892.png" />

  </div>
);

export default Tile8;
