import React, { useCallback, useRef } from 'react';
import { Input, Form, Button } from 'antd';

const PostForm = () => {
  const inputRef = useRef();
  const [form] = Form.useForm();

  const imageUpload = useCallback(() => {
    inputRef.current.click();
  }, []);

  const postUpload = useCallback((v) => {
    console.log(v);
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
      <Button htmlType="submit" type="primary" style={{ float: 'right' }}>
        올리기
      </Button>
    </Form>
  );
};

export default PostForm;
