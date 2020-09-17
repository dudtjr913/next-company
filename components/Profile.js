import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  EditOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const ButtonWrapper = styled(Button)`
  float: right;
  position: absolute;
  right: 0;
  bottom: 48px;
  border: none;
`;

const Profile = ({ login }) => {
  const handleOnLogout = useCallback(() => {
    login(false);
  }, []);
  return (
    <>
      <Card
        cover={
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            alt="profile"
          />
        }
        actions={[<HomeOutlined />, <SettingOutlined />, <EditOutlined />]}
      >
        <Card.Meta
          avatar={<Avatar icon={<UserOutlined />} />}
          title="사용자 이름"
          description="각종 정보"
        />
        <ButtonWrapper onClick={handleOnLogout}>로그아웃</ButtonWrapper>
      </Card>
    </>
  );
};

export default Profile;
