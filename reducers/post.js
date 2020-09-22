import faker from 'faker';
import shortId from 'shortid';

const initialState = {
  mainPosts: [
    {
      id: shortId.generate(),
      User: {
        Id: 'dudtjr913',
        nickname: '영석',
      },
      content: '과연 이게 #될까? ##모르겠다##성공해보자',
      Images: [
        {
          id: shortId.generate(),
          src: faker.image.image(),
        },
        {
          id: shortId.generate(),
          src: faker.image.image(),
        },
        {
          id: shortId.generate(),
          src: faker.image.image(),
        },
        {
          id: shortId.generate(),
          src: faker.image.image(),
        },
        {
          id: shortId.generate(),
          src: faker.image.image(),
        },
      ],
      Comments: [
        {
          id: shortId.generate(),
          Id: faker.name.findName(),
          nickname: faker.name.firstName(),
          content: faker.lorem.sentence(),
        },
        {
          id: shortId.generate(),
          Id: faker.name.findName(),
          nickname: faker.name.firstName(),
          content: faker.lorem.sentence(),
        },
        {
          id: shortId.generate(),
          Id: faker.name.findName(),
          nickname: faker.name.firstName(),
          content: faker.lorem.sentence(),
        },
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
