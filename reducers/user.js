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

  posts: [],
  followings: [],
  followers: [],
};

const dummyData = {
  posts: [{ id: 'yeong', nickname: '영석' }],
  followings: [{ id: 'bak' }, { id: 'seul' }],
  followers: [{ id: 'bak' }, { id: 'seul' }],
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

export const ADD_TO_ME_POST = 'ADD_TO_ME_POST';
export const REMOVE_OF_ME_POST = 'REMOVE_OF_ME_POST';

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
        posts: dummyData.posts,
        followings: dummyData.followings,
        followers: dummyData.followers,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInDone: false,
        logInError: true,
        me: null,
        posts: [],
        followings: [],
        followers: [],
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
    case FOLLOWING_REQUEST:
      return {
        ...state,
        followingLoading: true,
        followingDone: false,
        followingError: false,
      };
    case FOLLOWING_SUCCESS:
      return {
        ...state,
        followingLoading: false,
        followingDone: true,
        followingError: false,
      };
    case FOLLOWING_FAILURE:
      return {
        ...state,
        followingLoading: false,
        followingDone: false,
        followingError: true,
      };
    case ADD_TO_ME_POST: {
      return {
        ...state,
        posts: [...state.posts, action.data],
      };
    }
    case REMOVE_OF_ME_POST: {
      return {
        ...state,
        posts: [...state.posts.filter((v) => v.id !== action.data)],
      };
    }
    default:
      return state;
  }
};

export default reducer;
