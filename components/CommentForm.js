import React, { useCallback, useState } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { dummyComment } from '../reducers/post';

const CommentForm = ({ postId }) => {
  const { Id, nickname } = useSelector((state) => state.user.me);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleOnText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const handleOnSubmit = useCallback(() => {
    dispatch(
      dummyComment({
        postId,
        Id,
        nickname,
        content: text,
      }),
    );
    setText('');
  }, [text, Id, nickname, postId]);
  return (
    <Form onFinish={handleOnSubmit} style={{ width: '95%', margin: '0 auto' }}>
      <Input.TextArea value={text} onChange={handleOnText} row={2} />
      <Button htmlType="submit" style={{ left: 'calc(100% - 60px)' }}>
        등록
      </Button>
    </Form>
  );
};

CommentForm.propTypes = {
  postId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default CommentForm;
