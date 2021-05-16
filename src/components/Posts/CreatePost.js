import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function CreatePost(props) {

  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      userName: event.target.userName.value,
      content: event.target.content.value,
      id: v4()
    })
  }

  return (
    <>
      <div className='component'>
        <form onSubmit={handleNewPostSubmission}>
          <input
            type='text'
            name='userName'
            placeholder='UserName' />
          <textarea
            type='text'
            name='content'
            placeholder='Share your thoughts here!' />
          <button type='submit'>Post</button>
        </form>
      </div>
    </>
  );
}

CreatePost.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default CreatePost;