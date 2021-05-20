import React, { useState, useContext } from 'react';
import './style.css';
import SignInBtn from '../../components/sign-in-btn/sign-in-btn';
import { UserContext } from '../../contexts/user';

export default function Header() {

  const [user, setUser] = useContext(UserContext).user

  return (
    <div className='header'>
      <h1>Accessible Seattle</h1>
        <div className='container'>
        {user ? 
        <img className='header-img' alt='profile photo'
        src={user.photoURL} /> 
        : <SignInBtn />}
        </div>
    </div>
  );
}