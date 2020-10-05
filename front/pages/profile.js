import React from 'react';
import { useSelector } from 'react-redux';
import LoginEditForm from '../components/LoginEditForm';
import AppLayout from '../components/AppLayout';
import FollowingsForm from '../components/FollowingsForm';
import FollowersForm from '../components/FollowersForm';

const profile = () => {
  const { me, followings, followers } = useSelector((state) => state.user);
  return (
    <div>
      <AppLayout>
        {!me ? (
          <div
            style={{
              textAlign: 'center',
              fontSize: '35px',
              margin: '15px auto',
            }}
          >
            로그인을 해주세요
          </div>
        ) : (
          <>
            <LoginEditForm />
            <FollowingsForm followings={followings} />
            <FollowersForm followers={followers} />
          </>
        )}
      </AppLayout>
    </div>
  );
};

export default profile;
