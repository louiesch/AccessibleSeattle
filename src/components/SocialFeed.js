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
      <hr/>
      {mainSocialFeed.map((post, index) =>
        <Post
          userName={post.userName}
          content={post.content}
          key={index} />
        )}
    </>
  );
}

export default SocialFeed