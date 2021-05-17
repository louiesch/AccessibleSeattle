import React from 'react';
import './style.css';
import SignInBtn from '../../components/sign-in-btn/sign-in-btn';

export default function Header() {
  return (
    <>
      <div className='header'>
        <h1>Accessible Seattle</h1>
        <SignInBtn />
      </div>
    </>
  );
}