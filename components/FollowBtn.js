import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const FollowBtn = ({ Id }) => {
  const { followings, me } = useSelector((state) => state.user);
  console.log(me.Id, Id);
  return me.Id === Id ? null : (
    <Button style={{ float: 'right' }}>
      {followings.find((v) => v.id === Id) ? '언팔로우' : '팔로우'}
    </Button>
  );
};

FollowBtn.propTypes = {
  Id: PropTypes.string.isRequired,
};

export default FollowBtn;
