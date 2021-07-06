import { SET_USER } from './types';

const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default reducer;
