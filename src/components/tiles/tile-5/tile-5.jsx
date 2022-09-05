import React from 'react'
import { actions } from '../../../store';
import VideoWrapper from '../../video/video';
import './tile-5.css'

const video1 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-5/films/SEM_COR_filme2_AVA-MOCOI_masterPortugues.mp4',
  en: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-5/films/SEM_COR_filme2_AVA-MOCOI_masterPortugues.mp4',
  es: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-5/films/SEM_COR_filme2_AVA-MOCOI_masterPortugues.mp4',
};

const video2 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-5/videos/depoimento2.mp4',
};

const Tile5 = ({ state, dispatch }) => (
  <div className="tile __5">
    <VideoWrapper
      id="__1"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/tile-5/film-thumbnail/filme2_AVA_MOCOI_pb.png"
      src={video1[state.language]}
      setVideo={(data) => {
        dispatch({
          type: actions.SET_VIDEO,
          data,
        })
      }}
    />

    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-5/illustrations/desenhos-AraPoty4.jpg" />

    <img draggable="false" className="illustration __2" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-5/illustrations/desenhos-AraPoty6.jpg" />

    <VideoWrapper
      id="__2"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/tile-5/film-thumbnail/depoimento2_frame_pb.png"
      src={video2[state.language]}
      setVideo={(data) => {
        dispatch({
          type: actions.SET_VIDEO,
          data,
        })
      }}
    />

    <img draggable="false" className="illustration __3" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-5/illustrations/janela.jpg" />

    <div
      className="cti-button-wrapper button-hover"
      onClick={() => {
        dispatch({
          type: 'OPEN_CTI',
        })
      }}
    >
      <button
        className="cti-button"
        onClick={() => null}
      >
        <img draggable="false" src="https://cti-assets.s3.us-west-2.amazonaws.com/buttons/botao_cti+%281%29.png" />
        CTI
      </button>
    </div>
  </div>
);

export default Tile5;
