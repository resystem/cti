import React from 'react';
import { Link } from 'gatsby';
import './language-selector.css';

const languages = {
  pt: {
    label: 'pt',
    url: '/',
  },
  en: {
    label: 'en',
    url: '/en',
  },
  es: {
    label: 'es',
    url: '/es',
  },
}

const LanguageSelector = ({ language }) =>  (
  <div className="language-selector">
    <div className="selected-language">{languages[language].label}</div>
    <img className="arrow" src="https://cti-assets.s3.us-west-2.amazonaws.com/tile-4/illustrations/flecha.png" />
    <ul className="language-list">
      {
        Object.keys(languages)
          .filter((key) => key !== language)
          .map((key) => (
            <li className='language'>
              <Link to={languages[key].url}>{languages[key].label}</Link>
            </li>
          ))
      }
    </ul>
  </div>
);

export default LanguageSelector;
