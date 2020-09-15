import React from "react";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import {
  HomeOutlined,
  AntDesignOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const InputLayout = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
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
          왼쪽 메뉴
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          오른쪽 메뉴
        </Col>
      </Row>
    </>
  );
};

export default AppLayout;
