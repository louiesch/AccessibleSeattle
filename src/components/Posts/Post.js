import React from "react";
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <>
      <div className='component'>
        <h3>{props.userName}</h3>
        <p>{props.content}</p>
      </div>
    </>
  );
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Post;