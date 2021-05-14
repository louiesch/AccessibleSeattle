import React from "react";
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <>
      <h3>{props.userName}</h3>
      <p>{props.content}</p>
      <hr/>
    </>
  );
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Post;