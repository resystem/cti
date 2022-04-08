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
    <svg xmlns="http://www.w3.org/2000/svg" color="#2a4f98" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/></svg>
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
