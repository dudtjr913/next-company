import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  EditOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginFailure } from '../reducers/user';

const ButtonWrapper = styled(Button)`
  float: right;
  position: absolute;
  right: 0;
  bottom: 48px;
  border: none;
`;

const Profile = () => {
  const dispatch = useDispatch();
  const handleOnLogout = useCallback(() => {
    dispatch(loginFailure);
  }, []);
  return (
    <>
      <Card
        style={{ marginTop: '10px' }}
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
