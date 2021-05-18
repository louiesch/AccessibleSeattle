import React from 'react';
import './style.css';
// import { Header, CreatePost } from '../../containers/containers.js';
import Header from '../../containers/header/header';
import CreatePost from '../../containers/create-post/create-post';

function Home() {
  return (
    <div className='home'>
      <Header />
      <CreatePost />
    </div>
  )
}

export default Home;

