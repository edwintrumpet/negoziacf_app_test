import { SET_USER, CLEAR_USER } from './types';

import { getOwnUserService } from '../services/users';
import { loginService, logoutService } from '../services/auth';

export const loginAction = async (dispatch, payload) => {
  const response = await loginService(payload);
  if (response.status === 200) {
    const { data } = await response.json();
    dispatch({ type: SET_USER, payload: data });
  }
};

export const logoutAction = async (dispatch) => {
  const response = await logoutService();
  if (response.status === 200) {
    dispatch({ type: CLEAR_USER });
  }
};

export const getOwnUserAction = async (dispatch) => {
  const response = await getOwnUserService();
  if (response.status === 200) {
    const { data } = await response.json();
    dispatch({ type: SET_USER, payload: data });
  }
};
