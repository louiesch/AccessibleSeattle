import React from 'react';
import './style.css';
import SignInBtn from '../../components/sign-in-btn/sign-in-btn';

function Header() {
  return (
    <>
      <div className='header'>
        <h1>Accessible Seattle</h1>
        <SignInBtn />
      </div>
    </>
  );
}

export default Header;