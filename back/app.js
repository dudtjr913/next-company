const express = require('express');
const postRouter = require('./routes/post');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>hello</h1>');
});

app.get('/get', (req, res) => {
  res.json([
    {
      id: 1,
      nickname: 'dd',
    },
  ]);
});

app.use('/post', postRouter);

app.listen(3065, () => console.log('서버실행!'));
