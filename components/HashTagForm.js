import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const HashTagForm = ({ content }) => {
  return (
    <div>
      <span>
        {content.split(/(#.[^#\s]+)/g).map((v) => {
          if (v.match(/(#.[^#\s]+)/)) {
            return (
              <Link href={`/hashtag/${v.slice(1)}`}>
                <a>{v}</a>
              </Link>
            );
          }
          return v;
        })}
      </span>
    </div>
  );
};

HashTagForm.propTypes = {
  content: PropTypes.string.isRequired,
};

export default HashTagForm;
