import React from 'react'
import { actions } from '../../../store';
import VideoWrapper from '../../video/video';
import './tile-2.css'

const video1 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-2/films/filme_3_ConselhosMbyaGuarani_Master_Legendas_Portugues.mp4',
  en: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-2/films/filme_3_ConselhosMbyaGuarani_Master_Legendas_English.mp4',
  es: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-2/films/filme_3_ConselhosMbyaGuarani_Master_Legendas_Espanhol.mp4',
};

const Tile2 = ({ state, dispatch }) => (
  <div className="tile __2">
    
    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-2/illustrations/desenho-Sophia12.jpg" />

    <VideoWrapper
      id="__1"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/tile-2/film-thumbnail/thumb-filme-3-Conselhos-Mbya-Guarani_pb.png"
      src={video1[state.language]}
      setVideo={(data) => {
        dispatch({
          type: actions.SET_VIDEO,
          data,
        })
      }}
    />

    <img draggable="false" className="illustration __2" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-2/illustrations/desenhos-AraPoty11.jpg" />
  </div>
);

export default Tile2;
