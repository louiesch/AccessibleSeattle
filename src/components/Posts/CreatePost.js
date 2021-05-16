import React from 'react';
import { v4 } from 'uuid';

function CreatePost() {

  function handleNewPostSubmission(event) {
    event.preventDefault();
    console.log(event.target.userName.value);
    console.log(event.target.content.value);
  }

  return (
    <>
      <div className='component'>
        <form onSubmit={handleNewPostSubmission}>
          <input
            type='text'
            name='userName'
            placeholder='LouieSch' />
          <textarea
            type='text'
            name='content'
            placeholder='this is a post, woohoo' />
          <button type='submit'>Post</button>
        </form>
      </div>
    </>
  );
}

export default CreatePost;