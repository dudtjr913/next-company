import React from 'react';
import PropTypes from 'prop-types';
import { Comment, List, Tooltip } from 'antd';
import moment from 'moment';

const Comments = ({ comment }) => {
  return (
    <List
      style={{ width: '95%', margin: '0 auto' }}
      className="commentList"
      header={`${comment.length}개의 답장`}
      itemLayout="horizontal"
      dataSource={comment}
      renderItem={(data) => (
        <li>
          <Comment
            style={{ borderBottom: '1px solid #F0EFEF' }}
            actions={[
              <span key={`${data.nickname}${data.content}`}>답장</span>,
            ]}
            author={data.nickname}
            avatar={<span>{data.Id[0].toUpperCase()}</span>}
            content={data.content}
            datetime={
              <Tooltip
                title={moment()
                  .subtract(0, 'days')
                  .format('YYYY-MM-DD HH:mm:ss')}
              >
                <span>{moment().subtract(0, 'days').fromNow()}</span>
              </Tooltip>
            }
          />
        </li>
      )}
    />
  );
};

Comments.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Comments;
