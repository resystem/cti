import React, { createContext, useReducer } from 'react';

export const actions = {
  SET_VIDEO: 'SET_VIDEO',
  SET_AUDIO: 'SET_AUDIO',
  SET_LANGUAGE: 'SET_LANGUAGE',
  OPEN_PARTNERS: 'OPEN_PARTNERS',
  CLOSE_PARTNERS: 'CLOSE_PARTNERS',
  OPEN_ABOUT: 'OPEN_ABOUT',
  CLOSE_ABOUT: 'CLOSE_ABOUT',
};

const initialState = {
  audio: null,
  video: null,
  about: false,
  partners: false,
  language: 'pt',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_VIDEO:
      return { ...state, video: action.data };
    case actions.SET_AUDIO:
      return { ...state, audio: action.data };
    case actions.OPEN_ABOUT:
      return { ...state, about: true };
    case actions.CLOSE_ABOUT:
      return { ...state, about: false };
    case actions.OPEN_PARTNERS:
      return { ...state, partners: true };
    case actions.CLOSE_PARTNERS:
      return { ...state, partners: false };
    case actions.SET_LANGUAGE:
      return { ...state, language: action.data };
    default:
      throw 'Invalid action type';
  }
};

export const ModalsContext = createContext();

export const StoreComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalsContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalsContext.Provider>
  );
};
