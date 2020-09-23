import faker from 'faker';

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
  data: {
    Id: data.Id,
    nickname: faker.name.findName(),
  },
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
          me: null,
        },
      };
    default:
      return state;
  }
};

export default reducer;
