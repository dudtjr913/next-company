import React from 'react';
import { List, Card, Button } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const FollowersForm = ({ followers }) => (
  <Card
    title="팔로워 목록"
    style={{ textAlign: 'center', width: '40vw', margin: '30px auto' }}
  >
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={followers}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.nickname}>{<StopOutlined />}</Card>
        </List.Item>
      )}
      footer={<Button>더 보기</Button>}
    />
  </Card>
);

FollowersForm.propTypes = {
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FollowersForm;
