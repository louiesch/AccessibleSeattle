// basically a running list of posts

import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function SocialFeed(props) {
  return (
    <>
      <div className='component'>
        {props.socialFeed.map((post, index) =>
          <Post
            userName={post.userName}
            content={post.content}
            key={index} />
        )}
      </div>
    </>
  );
}

SocialFeed.propTypes = {
  socialFeed: PropTypes.array
};

export default SocialFeed;