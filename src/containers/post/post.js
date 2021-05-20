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
          <p style={{marginLeft:'8px', fontWeight: 'bold'}}>{username}</p>
        </div>
        <button className='post-delete'>Delete</button>
      </div>
      <div className='post-center'>
        <p>
          <span style={{fontWeight: 'bold', marginRight: '5px'}}>Location: </span>
          {title}
        </p>
        <p>
          <span>{content}</span>
        </p>
      </div>
    </div>
  );
}

export default Post;
