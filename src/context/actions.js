import { SET_USER } from './types';

import { loginService, getOwnUserService } from '../services/users';

export const loginAction = async (dispatch, payload) => {
  const response = await loginService(payload);
  if (response.status === 200) {
    const { data } = await response.json();
    dispatch({ type: SET_USER, payload: data });
  }
};

export const getOwnUserAction = async (dispatch) => {
  const response = await getOwnUserService();
  if (response.status === 200) {
    const { data } = await response.json();
    dispatch({ type: SET_USER, payload: data });
  }
};
