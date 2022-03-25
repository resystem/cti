import React, { createContext, useReducer } from 'react';

export const actions = {
  SET_VIDEO: 'SET_VIDEO',
  SET_AUDIO: 'SET_AUDIO',
  SET_TEXT: 'SET_TEXT',
};

const initialState = {
  audio: null,
  video: null,
  text: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_VIDEO:
      return { ...state, video: action.data };
    case actions.SET_AUDIO:
      return { ...state, audio: action.data };
    case actions.SET_TEXT:
      return { ...state, text: action.data };
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
