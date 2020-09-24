import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  EditOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';

const ButtonWrapper = styled(Button)`
  float: right;
  position: absolute;
  right: 0;
  bottom: 48px;
  border: none;
`;

const Profile = () => {
  const dispatch = useDispatch();
  const { logOutLoading } = useSelector((state) => state.user);
  const handleOnLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
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
        <ButtonWrapper loading={logOutLoading} onClick={handleOnLogout}>
          로그아웃
        </ButtonWrapper>
      </Card>
    </>
  );
};

export default Profile;
