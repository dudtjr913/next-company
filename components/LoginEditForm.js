import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';

const LoginEditForm = () => {
  const [text, setText] = useState('');

  const handleOnText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(() => {
    console.log(text);
    setText('');
  }, [text]);
  return (
    <>
      <Form
        style={{
          border: '1px solid gray',
          width: '40vw',
          textAlign: 'center',
          padding: '15px',
          display: 'flex',
          margin: '0 auto',
        }}
        onFinish={handleOnSubmit}
      >
        <Input
          addonBefore={<div>닉네임</div>}
          style={{ width: '35vw' }}
          value={text}
          onChange={handleOnText}
        />
        <Button type="primary" htmlType="submit">
          수정
        </Button>
      </Form>
    </>
  );
};

export default LoginEditForm;
