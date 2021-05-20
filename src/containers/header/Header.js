import React, { useState, useContext } from 'react';
import './style.css';
import SignInBtn from '../../components/sign-in-btn/sign-in-btn';
import { UserContext } from '../../contexts/user';

export default function Header() {

  const [user, setUser] = useContext(UserContext).user

  return (
    <div className='header'>
      <h1>Accessible Seattle 
        <img style={{marginLeft:'10px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Wheelchair_symbol.svg/898px-Wheelchair_symbol.svg.png' alt='wheelchair accessible symbol' width='35px' height='35px'></img>
      </h1>
      <div className='container'>
      {user ? 
      <img className='header-img' alt='profile photo'
      src={user.photoURL} /> 
      : <SignInBtn />}
      </div>
    </div>
  );
}