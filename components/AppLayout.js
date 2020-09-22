import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import {
  HomeOutlined,
  AntDesignOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LinkForm from './LinkForm';
import LoginForm from './LoginForm';
import Profile from './Profile';

const InputLayout = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const { logIn } = useSelector((state) => state.user.user);
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link href="/">
            <a>홈</a>
          </Link>
        </Menu.Item>
        <Menu.Item icon={<AntDesignOutlined />}>
          <Link href="/signup" key="signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
        <Menu.Item icon={<ProfileOutlined />}>
          <Link href="/profile" key="profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <InputLayout placeholder="search ID" enterButton />
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {logIn ? <Profile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <LinkForm />
        </Col>
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
