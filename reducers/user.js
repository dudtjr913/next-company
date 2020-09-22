const initialState = {
  user: {
    me: null, // 유저 정보
    logIn: false,
    logOut: false,
    followings: [],
    followers: [],
    posts: [],
  },
};

export const loginSuccess = (data) => ({
  type: 'LOG_IN_SUCCESS',
  data,
});

export const loginFailure = {
  type: 'LOG_IN_FAILURE',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          logIn: true,
          me: action.data,
        },
      };
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        user: {
          ...state.user,
          logIn: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
