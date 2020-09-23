import faker from 'faker';
import shortId from 'shortid';

const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        Id: 'dudtjr913',
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
};

const UPLOAD_POST = 'UPLOAD_POST';

export const dummyData = (data) => ({
  type: UPLOAD_POST,
  data: {
    id: shortId.generate(),
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
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_POST:
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
      };
    default:
      return state;
  }
};

export default reducer;
