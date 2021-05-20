import React from 'react';
import './style.css';
import Post from '../post/post'

function SocialFeed() {
  return (
    <div className='socialfeed'>
      <Post photoURL='https://lh3.googleusercontent.com/a-/AOh14GjJQpO6czRohgOIgcUbPfKmZXVa2jmZC7_l99yQog=s96-c' 
      username='LouieSch'/>
    </div>
  );
}

export default SocialFeed;