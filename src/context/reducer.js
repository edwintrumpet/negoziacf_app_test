import { CHANGE_NAME } from './types';

const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case CHANGE_NAME:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default reducer;
