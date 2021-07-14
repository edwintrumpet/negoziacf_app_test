import { SET_USER, CLEAR_USER } from './types';

const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
