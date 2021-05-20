import React, { useState, useContext } from 'react';
import UserContext from '../../contexts/user'

function Post() {

  const [user, setUser] = useContext(UserContext).user;

  return (
    <div className='container'>
      <div className='post'>
        <img src={user.photoURL} />
      </div>
    </div>
  )
}

export default Post;
