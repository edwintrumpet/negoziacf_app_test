import { CHANGE_NAME } from './types';

// import { changeName as changeNameService } from '../services/user';

// eslint-disable-next-line import/prefer-default-export
export const login = async (dispatch, payload) => {
  dispatch({ type: CHANGE_NAME, payload });
};
