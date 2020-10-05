import React, { useCallback, useState } from 'react';
import { Form, Input, Select, Checkbox, Button } from 'antd';

const SignUpForm = () => {
  const [userData, setUserData] = useState();

  const preSelector = (
    <Form.Item name="prefix" noStyle initialValue="010">
      <Select style={{ width: '80px' }}>
        <Select.Option value="010">+010</Select.Option>
        <Select.Option value="011">+011</Select.Option>
        <Select.Option value="019">+019</Select.Option>
      </Select>
    </Form.Item>
  );

  const signUpOnSubmit = useCallback(
    (data) => {
      console.log(data);
      setUserData(data);
    },
    [userData],
  );

  return (
    <Form
      style={{ textAlign: 'center', margin: '10px auto' }}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 10 }}
      onFinish={(data) => signUpOnSubmit(data)}
    >
      <Form.Item rules={[{ required: true }]} name="ID" label="ID">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        rules={[{ required: true }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="nickname" label="Nickname" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[{ required: true }]}
      >
        <Input addonBefore={preSelector} />
      </Form.Item>
      <Form.Item
        wrapperCol={{ span: 16 }}
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) => {
              return value
                ? Promise.resolve()
                : Promise.reject(new Error('Should accept agrrement'));
            },
          },
        ]}
      >
        <Checkbox>회원가입에 동의합니다.</Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 16 }}>
        <Button type="primary" htmlType="submit">
          회원가입
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
