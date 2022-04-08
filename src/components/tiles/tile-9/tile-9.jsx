import React from 'react'
import { actions } from '../../../store';
import VideoWrapper from '../../video/video';
import './tile-9.css'

const video1 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-9/videos/depoimento3.mp4',
};

const Tile9 = ({ state, dispatch }) => (
  <div className="tile __9">
    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-9/illustrations/alberto.JPG" />

    <VideoWrapper
      id="__1"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/tile-9/film-thumbnail/depoimento3_frame_pb.png"      
      src={video1[state.language]}
      setVideo={(data) => {
        dispatch({
          type: actions.SET_VIDEO,
          data,
        })
      }}
    />

    <img draggable="false" className="photo __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-9/photos/GIF_2_D.png" />    

    <div className="partners-button-wrapper">
      <button
        className="partners-button"
        onClick={() => {
          dispatch({
            type: actions.OPEN_PARTNERS
          })
        }}
      >
        <img draggable="false" src="https://cti-assets.s3.us-west-2.amazonaws.com/buttons/botao_apoios.png" />
        apoios e parce-
      </button>
    </div>
  </div>
);

export default Tile9;
