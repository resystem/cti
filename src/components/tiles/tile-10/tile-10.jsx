import React from 'react'
import { actions } from '../../../store';
import VideoWrapper from '../../video/video';
import './tile-10.css'

const video1 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/pexels-ekaterina-bolovtsova-7003250.mp4',
};

const Tile10 = ({ state, dispatch }) => (
  <div className="tile __10">
    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/illustrations/Kerexu_IMG_8899.png" />

    <img draggable="false" className="illustration __2" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/illustrations/borboleta.jpg" />

    <img draggable="false" className="illustration __3" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/illustrations/not-found.JPG" />
 
    <VideoWrapper
      id="__1"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/film-thumbnail/filme4_AYVU_RAPYTA_pb.png"
      src={video1[state.language]}
      setVideo={(data) => {
        dispatch({
          type: actions.SET_VIDEO,
          data,
        })
      }}
    />

    <img draggable="false" className="illustration __4" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/illustrations/fogoecidade_pg.jpg" />
  </div>
);

export default Tile10;
