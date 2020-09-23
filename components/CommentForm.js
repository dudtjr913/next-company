import React from 'react';
import { Form, Input, Button } from 'antd';

const CommentForm = () => {
  return (
    <Form style={{ width: '95%', margin: '0 auto' }}>
      <Input.TextArea row={2} />
      <div style={{ width: '100%', display: 'block' }}>
        <Button style={{ float: 'right' }}>등록</Button>
      </div>
    </Form>
  );
};

export default CommentForm;
