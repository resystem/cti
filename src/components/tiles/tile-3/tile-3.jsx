import React from 'react'
import { actions } from '../../../store';
import VideoWrapper from '../../video/video';
import './tile-3.css'

const video1 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/films/filme_5_AyvyNhexyro_Master_Legendas_Portugues-001.mp4',
  en: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/films/filme_5_AyvyNhexyro_Master_Legendas_English-004.mp4',
  es: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/films/filme_5_AyvyNhexyro_Master_Legendas_Espanol-002.mp4',
};

const Tile3 = ({ state, dispatch }) => (
  <div className="tile __3">
    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/illustrations/forma_3.png" />
    
    <img draggable="false" className="photo __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/gifs/3.gif" />    

    <img draggable="false" className="illustration __2" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/illustrations/desenho-Sophia13.jpg" />

    <img draggable="false" className="illustration __3" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/illustrations/desenho-Sophia07.jpg" />

    <VideoWrapper
      id="__4"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/film-thumbnail/filme5_Ayvu_Nhexyro_pb.png"
      src={video1[state.language]}
      setVideo={(data) => {
        dispatch({
          type: actions.SET_VIDEO,
          data,
        })
      }}
      setAudio={(data) => {
        dispatch({
          type: actions.SET_AUDIO,
          data,
        })
      }}
      synopsis={{
        title: 'AYVU NHEXYRÕ',
        subtitle: '',
        src: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/sinopse+filme+5_Ayvu+Nhexyro.wav'
      }}
      author={{
        name: 'Werá Alexandre',
        place: '',
        src: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-3/biografia+filme+5_Ayvu+Nhexyro.wav'
      }}
    />
    
  </div>
);

export default Tile3;
