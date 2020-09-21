import React from 'react';
import LoginEditForm from '../components/LoginEditForm';
import AppLayout from '../components/AppLayout';
import FollowingsForm from '../components/FollowingsForm';
import FollowersForm from '../components/FollowersForm';

const profile = () => {
  const followings = [
    {
      email: 'dudtjr913@naver.com',
      nickname: 'dudtjr',
    },
    {
      email: 'hybam318@naver.com',
      nickname: 'hybam',
    },
    {
      email: 'yeong318@naver.com',
      nickname: 'yeong',
    },
  ];

  const followers = [
    {
      email: 'dudtjr913@naver.com',
      nickname: 'dudtjr',
    },
    {
      email: 'hybam318@naver.com',
      nickname: 'hybam',
    },
    {
      email: 'yeong318@naver.com',
      nickname: 'yeong',
    },
  ];
  return (
    <div>
      <AppLayout>
        <LoginEditForm />
        <FollowingsForm followings={followings} />
        <FollowersForm followers={followers} />
      </AppLayout>
    </div>
  );
};

export default profile;
