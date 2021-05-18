import React, { useContext, useState } from 'react';
import './style.css';
import SignInBtn from '../../components/sign-in-btn/sign-in-btn';
import { UserContext } from '../../contexts/user';
import { storage } from '../../firebase.js';

export default function CreatePost() {
  const [user, setUser] = useContext(UserContext).user;
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const handlePublish = () => {
    if(content) {
      const uploadTask = storage.ref(`posts/${content}`)
    }
  };

  return (
    <div className='createPost'>

      {user ? (
        <div className='textBlock'>
          <p>Share Below:</p>
          <div className='loggedInShow'>
            <textarea
              className='title'
              rows='1'
              value={title}
              placeholder='Title'
              onChange={(event) => setTitle(event.target.value)}>
            </textarea>
            <textarea
              className='textArea'
              rows='5'
              value={content}
              placeholder='Share your experience here!'
              onChange={(event) => setContent(event.target.value)}>
            </textarea>
          </div>
            <button 
              className='publishBtn'
              onClick={handlePublish}
              style={{ color: content ? '#000' : 'lightgray' }}>
              Publish Post
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

