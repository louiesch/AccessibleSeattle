import React, { useContext, useState } from 'react';
import './style.css';
import SignInBtn from '../../components/sign-in-btn/sign-in-btn';
import { UserContext } from '../../contexts/user';

export default function CreatePost() {
  const [user, setUser] = useContext(UserContext).user;
  const [content, setContent] = useState('');

  const handlePublish = () => {

  }

  return (
    <div className='createPost'>

      {user ? (
        <div className='loggedIn'>
          <p>Share Below:</p>
          <div className='loggedInShow'>
            <textarea
              className='textArea'
              rows='10'
              value={content}
              onChange={(event) => setContent(event.target.value)}>
            </textarea>
          </div>
            <button 
              className='createPost-publish'
              onClick={handlePublish}
              style={{ color: content ? '#000' : 'lightgray' }}>
              Publish
            </button>
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

