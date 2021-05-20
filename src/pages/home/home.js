import React from 'react';
import './style.css';
import Header from '../../containers/header/header';
import CreatePost from '../../containers/create-post/create-post';
import SocialFeed from '../../containers/social-feed/social-feed';

function Home() {
  return (
    <div className='home'>
      <Header />
      <CreatePost />
      <SocialFeed />
    </div>
  )
}

export default Home;

