// basically a running list of posts

import React from 'react';
import Post from './Post';

const mainSocialFeed = [
  {
    userName: 'LouieSch',
    content: 'My first post, yay!' 
  },
  {
    userName: 'LBJ',
    content: 'hey Louie this is so cool'
  },
  {
    userName: 'LouieSch',
    content: 'Here is another post, check it out!'
  }
];

function SocialFeed() {
  return (
    <>
    <div className='component'>
      {mainSocialFeed.map((post, index) =>
        <Post
          userName={post.userName}
          content={post.content}
          key={index} />
        )}
      </div>
    </>
  );
}

export default SocialFeed