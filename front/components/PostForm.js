import React, { useCallback, useRef } from 'react';
import shortid from 'shortid';
import { Input, Form, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
  const inputRef = useRef();
  const [form] = Form.useForm();
  const { Id } = useSelector((state) => state.user.me);
  const { uploadPostLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const imageUpload = useCallback(() => {
    inputRef.current.click();
  }, []);

  const postUpload = useCallback((v) => {
    if (v === '') {
      return;
    }
    dispatch({
      type: UPLOAD_POST_REQUEST,
      data: { Id, content: v, id: shortid.generate() },
    });
    form.setFieldsValue({
      post: '',
    });
  }, []);

  return (
    <Form
      form={form}
      style={{ margin: '10px auto', width: '95%' }}
      onFinish={(v) => postUpload(v.post)}
    >
      <Form.Item name="post" noStyle>
        <Input.TextArea rows={4} />
      </Form.Item>
      <input ref={inputRef} type="file" multiple hidden />
      <Button onClick={imageUpload}>이미지 업로드</Button>
      <Button
        loading={uploadPostLoading}
        htmlType="submit"
        type="primary"
        style={{ float: 'right' }}
      >
        올리기
      </Button>
    </Form>
  );
};

export default PostForm;
