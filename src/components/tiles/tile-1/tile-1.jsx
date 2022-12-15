import React from 'react'
import { actions } from '../../../store';
import LanguageSelector from '../../language-selector/language-selector';
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
    <LanguageSelector language={state.language} />

    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/illustrations/desenho-Sophia05.jpg" />
    <VideoWrapper
      id="__1"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/frames/filme+1_Nhemongarai+BATISMO+DA+ALMA_pb.png.png"
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
        title: 'Nhe\‘en-mongarai / Batismo da alma',
        subtitle: 'Batismo da alma',
        src: 'https://cti-assets.s3.us-west-2.amazonaws.com/audios/sinopse+filme+1_Nhemongarai+BATISMO+DA+ALMA.wav',
      }}
      author={{
        name: 'Alberto Alvares',
        place: 'Tekoha Yhovy e Tekoha Guarani - Terra Indígena de Guasu Guavirá, Município de Guaíra - PR NHE\‘EN-MONGARAI',
        src: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-11/audio/biografia+filme+1_Nhemongarai+BATISMO+DA+ALMA.wav',
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

    <img draggable="false" className="gif __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/gifs/1.gif" />

    <img draggable="false" className="gif __2" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/illustrations/galinhas.png" />

    <img draggable="false" className="gif __3" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-1/illustrations/forma_6.png" />

    <div className="about-button-wrapper button-hover">
      <button
        className="about-button"
        onClick={() => {
          dispatch({ type: actions.OPEN_ABOUT });
        }}
      >
        <img draggable="false" src="https://cti-assets.s3.us-west-2.amazonaws.com/buttons/botao_enquanto+isso.png" />
        enquanto isso
      </button>
    </div>
  </div>
);

export default Tile1;
