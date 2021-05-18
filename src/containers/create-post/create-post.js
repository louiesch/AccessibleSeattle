import React, { useContext, useState } from 'react';
import './style.css';
import SignInBtn from '../../components/sign-in-btn/sign-in-btn';
import { UserContext } from '../../contexts/user';

export default function CreatePost() {
  const [user, setUser] = useContext(UserContext).user;
  const [content, setContent] = useState('');
  return (
    <div className='createPost'>

      {user ? (
        <div className='loggedIn'>
          <p>Create Post</p>
          <div className='loggedInShow'>
            <textarea
              className='textarea'
              rows='10'
              value={content}
              onChange={(event) => setContent(event.target.value)}>
            </textarea>
          </div>
        </div>
      ) : (
        <div>
          <SignInBtn />
          <p style={{ marginLeft: '5px' }}>to Post!</p>
        </div>
      )}
    </div>
  );
}

