import React from 'react'
import { actions } from '../../../store';
import VideoWrapper from '../../video/video';
import './tile-11.css'

const video1 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-11/videos/depoimento6.mp4',
};

const Tile11 = ({ state, dispatch }) => (
  <div className="tile __11">
    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-11/illustrations/pesemente.jpg" />

    <VideoWrapper
      id="__1"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/tile-11/film-thumbnail/depoimento6_frame_pb.png"
      src={video1[state.language]}
      setVideo={(data) => {
        dispatch({
          type: actions.SET_VIDEO,
          data,
        })
      }}
    />

    <img draggable="false" className="illustration __2" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-11/illustrations/Paty_Digitalizado_20210621-1235.png" />

  </div>
);

export default Tile11;
