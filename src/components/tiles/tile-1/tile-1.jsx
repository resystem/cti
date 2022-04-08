import React from 'react'
import { actions } from '../../../store';
import VideoWrapper from '../../video/video';
import './tile-1.css'

const video1 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/films/filme_1_Nhemongarai-BATISMO-DA-ALMA_Master_Legendas_Portugues.mp4',
  en: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/films/filme_1_Nhemongarai-BATISMO-DA-ALMA_Master_Legendas_English.mp4',
  es: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/films/filme_1_Nhemongarai-BATISMO-DA-ALMA_Master_Legendas_Espanol.mp4',
};

const video2 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/videos/depoimento1.mp4',
};

const Tile1 = ({ state, dispatch }) => (
  <div className="tile __1">
    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/illustrations/desenho-Sophia05.jpg" />
    <VideoWrapper
      id="__1"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/film-thumbnail/filme+1_Nhemongarai+BATISMO+DA+ALMA_pb.png"
      src={video1[state.language]}
      setVideo={(data) => {
        dispatch({
          type: actions.SET_VIDEO,
          data,
        })
      }}
    />

    <VideoWrapper
      id="__2"
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/film-thumbnail/depoimento1_frame_pb.png"
      src={video2[state.language]}
      video={state.video}
      setVideo={(data) => {
        dispatch({
          type: actions.SET_VIDEO,
          data,
        })
      }}
    />

    <img draggable="false" className="gif __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/photos/GIF+1_Opy+D+novo.png" />

    <img draggable="false" className="gif __2" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/illustrations/galinhas.png" />
  </div>
);

export default Tile1;
