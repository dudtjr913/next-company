const initialState = {
  me: null, // 유저 정보
  logInLoading: false,
  logInDone: false,
  logInError: false,

  logOutLoading: false,
  logOutDone: false,
  logOutError: false,

  followingLoading: false,
  followingDone: false,
  followingError: false,

  followerLoading: false,
  followerDone: false,
  followerError: false,

  followings: [],
  followers: [],
  posts: [],
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const FOLLOWING_REQUEST = 'FOLLOWING_REQUEST';
export const FOLLOWING_SUCCESS = 'FOLLOWING_SUCCESS';
export const FOLLOWING_FAILURE = 'FOLLOWING_FAILURE';

export const FOLLOWER_REQUEST = 'FOLLOWER_REQUEST';
export const FOLLOWER_SUCCESS = 'FOLLOWER_SUCCESS';
export const FOLLOWER_FAILURE = 'FOLLOWER_FAILURE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInDone: false,
        logInError: false,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        logInError: false,
        logOutDone: false,
        me: action.data,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInDone: false,
        logInError: true,
        me: null,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: false,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        logOutError: false,
        logInDone: false,
        me: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: false,
        logOutError: true,
      };
    default:
      return state;
  }
};

export default reducer;
