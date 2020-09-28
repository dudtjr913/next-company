import React from 'react';
import { List, Card, Button } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const FollowingsForm = ({ followings }) => (
  <Card
    title="팔로잉 목록"
    style={{ textAlign: 'center', width: '40vw', margin: '30px auto' }}
  >
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={followings}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.id}>{<StopOutlined />}</Card>
        </List.Item>
      )}
      footer={<Button>더 보기</Button>}
    />
  </Card>
);

FollowingsForm.propTypes = {
  followings: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};

export default FollowingsForm;
