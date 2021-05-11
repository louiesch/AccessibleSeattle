import React from "react";

function Post(props) {
  return (
    <>
      <h3>{props.userName}</h3>
      <p>{props.post}</p>
      <hr/>
    </>
  );
}

export default Post;