import React, { useState, useContext } from 'react';
import './style.css';

function Post({
  username, 
  photoURL, 
  title, 
  content,
  id
}) {
  return (
      <div className='post'>
        <div className='post-header'>
          <div className='post-header-left'>
            <img className='post-profile-img' src={photoURL} />
            <p>{username}</p>
          </div>
          <button>Delete</button>
        </div>
      </div>
  );
}

export default Post;
