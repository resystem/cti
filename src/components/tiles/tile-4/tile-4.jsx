import React from 'react'
import { actions } from '../../../store';
import VideoWrapper from '../../video/video';
import './tile-4.css'

const video1 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-4/films/filme_6_MoaKaaguy_Master_Legendas_Portugues-003.mp4',
  en: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-4/films/filme_6_MoaKaaguy_Master_Legendas_English-001.mp4',
  es: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-4/films/filme_6_MoaKaaguy_Master_Legendas_Espanol-004.mp4',
};

const video2 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-4/videos/depoimento4.mp4',
};

const Tile4 = ({ state, dispatch }) => (
  <div className="tile __4">
    <VideoWrapper
      id="__1"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/tile-4/film-thumbnail/filme6_MoaKaaguy_pb.png"
      src={video1[state.language]}
      setVideo={(data) => {
        dispatch({
          type: actions.SET_VIDEO,
          data,
        })
      }}
    />

    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-4/illustrations/not-found.png" />

    <img draggable="false" className="illustration __2" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-4/illustrations/desenho-Sophia11.jpg" />

    <img draggable="false" className="illustration __3" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-4/illustrations/forma_2.png" />

    <img draggable="false" className="illustration __4" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-4/illustrations/casa.png" />

    <VideoWrapper
      id="__2"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/tile-4/film-thumbnail/depoimento4_frame_pb.png"
      src={video2[state.language]}
      setVideo={(data) => {
        dispatch({
          type: actions.SET_VIDEO,
          data,
        })
      }}
    />

  </div>
);

export default Tile4;
