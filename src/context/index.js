import React, { createContext, useContext, useReducer } from 'react';
import { node } from 'prop-types';

import initialState from './initialState';
import reducer from './reducer';

const State = createContext();
const Dispatch = createContext();

export const useGlobalState = () => {
  const context = useContext(State);
  if (!context) {
    throw new Error('useState must be used within a State provider');
  }
  return context;
};

export const useDispatch = () => {
  const context = useContext(Dispatch);
  if (!context) {
    throw new Error('useDispatch must be used within a State provider');
  }
  return context;
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

Provider.propTypes = {
  children: node,
};

Provider.defaultProps = {
  children: null,
};
