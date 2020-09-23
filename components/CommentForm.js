import React, { useCallback, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { dummyComment, UPLOAD_COMMENT } from '../reducers/post';

const CommentForm = () => {
  const { Id, nickname } = useSelector((state) => state.user.user.me);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleOnText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const handleOnSubmit = useCallback(() => {
    dispatch(
      dummyComment({
        Id,
        nickname,
        content: text,
      }),
    );
    setText('');
  }, [text]);
  return (
    <Form onFinish={handleOnSubmit} style={{ width: '95%', margin: '0 auto' }}>
      <Input.TextArea value={text} onChange={handleOnText} row={2} />
      <Button htmlType="submit" style={{ left: 'calc(100% - 60px)' }}>
        등록
      </Button>
    </Form>
  );
};

export default CommentForm;
