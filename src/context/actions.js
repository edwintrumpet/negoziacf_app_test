import { SET_USER } from './types';

import { loginService } from '../services/users';

// eslint-disable-next-line import/prefer-default-export
export const loginAction = async (dispatch, payload) => {
  const user = await loginService(payload);
  dispatch({ type: SET_USER, payload: user.name });
  window.localStorage.setItem('token', user.token);
};
