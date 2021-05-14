import React from "react";
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <>
      <h3>{props.userName}</h3>
      <p>{props.post}</p>
      <hr/>
    </>
  );
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired
};

export default Post;