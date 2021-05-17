import React from 'react';
import './style.css';
// import { Header, CreatePost } from '../../containers';
import Header from '../../containers/header/header';
import CreatePost from '../../containers/create-post/create-post';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <CreatePost />
    </div>
  )
}

