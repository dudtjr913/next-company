const initialState = {
  user: {
    login: false,
  },
};

export const loginSuccess = {
  type: 'LOG_IN_SUCCESS',
};

export const loginFailure = {
  type: 'LOG_IN_FAILURE',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          login: true,
        },
      };
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        user: {
          ...state.user,
          login: false,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
