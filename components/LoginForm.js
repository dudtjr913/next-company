import React, { useState, useCallback } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../reducers/user';

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleOnId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const handleOnPassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(() => {
    setId('');
    setPassword('');
    dispatch(loginSuccess({ Id: id }));
  }, [id, password]);

  return (
    <>
      <Form
        name="login-form"
        className="login-form"
        onFinish={handleOnSubmit}
        style={{ maxWidth: '300px', marginTop: '10px', marginLeft: '10px' }}
      >
        <Input
          prefix={<UserOutlined />}
          style={{ marginBottom: '12px' }}
          value={id}
          onChange={handleOnId}
          placeholder="아이디"
          required
        />
        <Input
          prefix={<LockOutlined />}
          style={{ marginBottom: '12px' }}
          value={password}
          onChange={handleOnPassword}
          type="password"
          placeholder="비밀번호"
          required
        />
        <Form.Item noStyle>
          <Form.Item name="remember" noStyle valuePropName="checked">
            <Checkbox>로그인 유지</Checkbox>
          </Form.Item>
          <a style={{ float: 'right' }} href="" className="password-forgot">
            비밀번호를 잊으셨나요?
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-button"
            style={{ width: '100%', marginTop: '12px' }}
          >
            로그인
          </Button>
          <div>
            또는{' '}
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
