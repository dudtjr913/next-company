import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Tooltip, Button } from 'antd';
import {
  HeartOutlined,
  CommentOutlined,
  HeartTwoTone,
  SettingOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import HashTagForm from './HashTagForm';
import ImageForm from './ImageForm';
import CommentForm from './CommentForm';
import Comments from './Comments';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(false);
  const { me } = useSelector((state) => state.user);
  const Id = me?.Id;
  const handleOnComment = useCallback(() => {
    setComment((prev) => !prev);
  }, []);
  const handleOnLiked = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  return (
    <>
      <Card
        style={{ width: '95%', margin: '10px auto' }}
        cover={post.Images[0] && <ImageForm images={post.Images} />}
        actions={[
          liked ? (
            <HeartTwoTone twoToneColor="#eb2f96" onClick={handleOnLiked} />
          ) : (
            <HeartOutlined onClick={handleOnLiked} />
          ),
          <CommentOutlined onClick={handleOnComment} />,
          <SettingOutlined />,
          <Tooltip
            color="none"
            title={
              <Button.Group>
                {Id && Id === post.User.Id ? (
                  <>
                    <Button>수정</Button>
                    <Button danger>삭제</Button>
                  </>
                ) : (
                  <Button type="primary" danger>
                    신고
                  </Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Tooltip>,
        ]}
      >
        <Card.Meta
          title={post.content.slice(0, 6)}
          description={<HashTagForm content={post.content} />}
        />
      </Card>
      {comment && me && <CommentForm postId={post.id} />}
      {comment && <Comments comment={post.Comments} />}
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    User: PropTypes.shape({
      Id: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
    }),
    content: PropTypes.string,
    Images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        src: PropTypes.string,
      }),
    ),
    Comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        Id: PropTypes.string,
        nickname: PropTypes.string,
        content: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default PostCard;
