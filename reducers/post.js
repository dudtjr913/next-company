import faker from 'faker';
import shortId from 'shortid';

const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        Id: 'bak',
        nickname: '영석',
      },
      content: '과연 이게 #될까? ##모르겠다##성공해보자',
      Images: [
        {
          id: '11',
          src: 'http://placeimg.com/640/480/technics',
        },
        {
          id: '12',
          src: 'http://placeimg.com/640/480/cats',
        },
        {
          id: '13',
          src: 'http://placeimg.com/640/480/people',
        },
        {
          id: '14',
          src: 'http://placeimg.com/640/480/nightlife',
        },
        {
          id: '15',
          src: 'http://placeimg.com/640/480/fashion',
        },
      ],
      Comments: [
        {
          id: 'dudtjr913',
          Id: 'dudtjr913',
          nickname: '영석',
          content: '이거 재밌네',
        },
        {
          id: 'hybam318',
          Id: 'hybam318',
          nickname: '히밤',
          content: '나는 히밤입니다',
        },
        {
          id: 'seulgi',
          Id: 'seulgi',
          nickname: '슬갸',
          content: '잘만들었네',
        },
      ],
    },
  ],
  uploadPostLoading: false,
  uploadPostDone: false,
  uploadPostError: false,

  uploadCommentLoading: false,
  uploadCommentDone: false,
  uploadCommentErrer: false,

  removePostLoading: false,
  removePostDone: false,
  removePostError: false,

  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: false,

  hasPosts: true,
};

export const UPLOAD_POST_REQUEST = 'UPLOAD_POST_REQUEST';
export const UPLOAD_POST_SUCCESS = 'UPLOAD_POST_SUCCESS';
export const UPLOAD_POST_FAILURE = 'UPLOAD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const UPLOAD_COMMENT_REQUEST = 'UPLOAD_COMMENT_REQUEST';
export const UPLOAD_COMMENT_SUCCESS = 'UPLOAD_COMMENT_SUCCESS';
export const UPLOAD_COMMENT_FAILURE = 'UPLOAD_COMMENT_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

const dummyPost = (number) => {
  return Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        Id: faker.name.findName(),
        nickname: faker.name.firstName(),
      },
      content: faker.lorem.sentence(),
      Images: [
        {
          src: faker.image.image(),
          id: shortId.generate(),
        },
      ],
      Comments: [
        {
          id: shortId.generate(),
          Id: faker.name.findName(),
          nickname: faker.name.firstName(),
          content: faker.lorem.sentence(),
        },
      ],
    }));
};

const myPost = (data) => ({
  id: data.id,
  User: {
    Id: data.Id,
    nickname: faker.name.findName(),
  },
  content: data.content,
  Images: [
    {
      src: faker.image.image(),
      id: shortId.generate(),
    },
  ],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  Id: data.Id,
  nickname: data.nickname,
  content: data.content,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_POST_REQUEST:
      return {
        ...state,
        uploadPostLoading: true,
        uploadPostDone: false,
        uploadPostError: false,
      };
    case UPLOAD_POST_SUCCESS:
      return {
        ...state,
        uploadPostLoading: false,
        uploadPostDone: true,
        uploadPostError: false,
        mainPosts: [myPost(action.data), ...state.mainPosts],
      };
    case UPLOAD_POST_FAILURE:
      return {
        ...state,
        uploadPostLoading: false,
        uploadPostDone: false,
        uploadPostError: true,
      };
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: false,
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        removePostLoading: false,
        removePostDone: true,
        removePostError: false,
        mainPosts: [...state.mainPosts.filter((v) => v.id !== action.data)],
      };
    case REMOVE_POST_FAILURE:
      return {
        ...state,
        removePostLoading: false,
        removePostDone: false,
        removePostError: true,
      };
    case UPLOAD_COMMENT_REQUEST:
      return {
        ...state,
        uploadCommentLoading: true,
        uploadCommentDone: false,
        uploadCommentError: false,
      };
    case UPLOAD_COMMENT_SUCCESS: {
      const post = [...state.mainPosts];
      const postIndex = post.findIndex((v) => v.id === action.data.postId);
      const comment = [...post[postIndex].Comments];
      post[postIndex] = {
        ...post[postIndex],
        Comments: [...comment, dummyComment(action.data)],
      };
      return {
        ...state,
        uploadCommentLoading: false,
        uploadCommentDone: true,
        uploadCommentError: false,
        mainPosts: post,
      };
    }
    case UPLOAD_COMMENT_FAILURE:
      return {
        ...state,
        uploadCommentLoading: false,
        uploadCommentDone: false,
        uploadCommentError: true,
      };
    case LOAD_POST_REQUEST:
      return {
        ...state,
        loadPostLoading: true,
        loadPostDone: false,
        loadPostError: false,
      };
    case LOAD_POST_SUCCESS:
      return {
        ...state,
        loadPostLoading: false,
        loadPostDone: true,
        loadPostError: false,
        mainPosts: [...state.mainPosts, ...dummyPost(10)],
        hasPosts: state.mainPosts.length < 50,
      };
    case LOAD_POST_FAILURE:
      return {
        ...state,
        loadPostLoading: false,
        loadPostDone: false,
        loadPostError: true,
      };
    default:
      return state;
  }
};

export default reducer;
