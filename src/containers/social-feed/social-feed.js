import React, { useState, useEffect } from 'react';
import './style.css';
import Post from '../post/post';
import { db } from '../../firebase';

function SocialFeed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((document) => ({
        id: document.id, post: document.data()})))
    });
  }, [])

  return (
    <div className='socialfeed'>
      {posts.map(({id, post}) => {
        return (
          <Post
            key={id}
            id={id} 
            photoURL={post.photoURL}
            username={post.username}
            title={post.title}
            content={post.content}
          />
        );
      })}

    </div>
  );
}

export default SocialFeed;