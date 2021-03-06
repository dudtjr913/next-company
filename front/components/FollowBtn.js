import React, { useCallback } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FOLLOWING_REQUEST, UNFOLLOWING_REQUEST } from '../reducers/user';

const FollowBtn = ({ Id, postId }) => {
  const { followings, me, unfollowingLoading, followingLoading } = useSelector(
    (state) => state.user,
  );
  const { mainPosts } = useSelector((state) => state.post);
  const findCorrectId = mainPosts.find((v) => v.id === postId);
  const dispatch = useDispatch();
  const handleOnFollowing = useCallback(() => {
    dispatch({
      type: FOLLOWING_REQUEST,
      data: { Id },
    });
  }, []);
  const handleOnUnfollowing = useCallback(() => {
    dispatch({
      type: UNFOLLOWING_REQUEST,
      data: { Id },
    });
  }, []);
  const myPost = me.Id === Id;
  const followText = followings.find((v) => v.Id === Id) ? (
    <Button
      loading={unfollowingLoading}
      onClick={handleOnUnfollowing}
      style={{ float: 'right' }}
    >
      {' '}
      언팔로우{' '}
    </Button>
  ) : (
    <Button
      loading={followingLoading}
      onClick={handleOnFollowing}
      style={{ float: 'right' }}
    >
      {' '}
      팔로우{' '}
    </Button>
  );
  return myPost ? null : followText;
};

FollowBtn.propTypes = {
  Id: PropTypes.string.isRequired,
  postId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default FollowBtn;
