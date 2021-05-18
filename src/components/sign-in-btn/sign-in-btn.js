import React, { useContext } from 'react';
import './style.css';
import { signIn } from '../../services/auth';
import { UserContext } from '../../contexts/user';

export default function SignInBtn() {
  const [user, setUser] = useContext(UserContext).user;

  const onSignInBtnClick = async () => {
    let userBySignIn = await signIn();
    if(userBySignIn) setUser(userBySignIn);
  };

  return (
    <div className='container'>
      <div className='signInBtn'>
        <p>Sign in With Google</p>
      </div>
    </div>
  );
}
