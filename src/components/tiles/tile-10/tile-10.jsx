import React from 'react'
import { actions } from '../../../store';
import VideoWrapper from '../../video/video';
import './tile-10.css'

const video1 = {
  pt: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/films/filme_4_AYVU-RAPYTA_Master_Legendas_Portugues.mp4',
  en: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/films/filme_4_AYVU-RAPYTA_Master_Legendas_English.mp4',
  es: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/films/filme_4_AYVU-RAPYTA_Master_Legendas_Espanol.mp4',
};

const Tile10 = ({ state, dispatch }) => (
  <div className="tile __10">
    <img draggable="false" className="illustration __1" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/illustrations/Kerexu_IMG_8899.png" />

    <img draggable="false" className="illustration __2" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/illustrations/borboleta.jpg" />

    <img draggable="false" className="illustration __3" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/illustrations/not-found.JPG" />
 
    <VideoWrapper
      id="__11"
      video={state.video}
      thumbnail="https://cti-assets.s3.us-west-2.amazonaws.com/frames/filme+4_AYVU+RAPYTA_colorida.png.png"
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
        title: 'Ayvu Rapyta / A essência das palavras',
        subtitle: '',
      }}
      author={{
        name: 'Coletivo Mbya de cinema',
        place: 'Aldeia Koenju - Terra Indígena Inhacapetum - São Miguel das Missões- RS',
        src: 'https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/biografia+filme+4_AYVU+RAPYTA.wav'
      }}
    />

    <img draggable="false" className="illustration __4" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-10/illustrations/fogoecidade_pg.jpg" />
    <img draggable="false" className="illustration __5" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-4/illustrations/sementes.png" />
  </div>
);

export default Tile10;
