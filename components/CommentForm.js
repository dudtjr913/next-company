import React, { useCallback, useState } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD_COMMENT_REQUEST } from '../reducers/post';

const CommentForm = ({ postId }) => {
  const { Id, nickname } = useSelector((state) => state.user.me);
  const { uploadCommentLoading } = useSelector((state) => state.post);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleOnText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const handleOnSubmit = useCallback(() => {
    if (text === '') {
      return;
    }
    dispatch({
      type: UPLOAD_COMMENT_REQUEST,
      data: {
        postId,
        Id,
        nickname,
        content: text,
      },
    });
    setText('');
  }, [text, Id, nickname, postId]);
  return (
    <Form onFinish={handleOnSubmit} style={{ width: '95%', margin: '0 auto' }}>
      <Input.TextArea value={text} onChange={handleOnText} row={2} />
      <Button
        loading={uploadCommentLoading}
        htmlType="submit"
        style={{ float: 'right', zIndex: '1' }}
      >
        등록
      </Button>
    </Form>
  );
};

CommentForm.propTypes = {
  postId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default CommentForm;
