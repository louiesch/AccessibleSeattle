import React, { useContext } from 'react';
import './style.css';
import { signIn } from '../../services/auth';
import { UserContext } from '../../contexts/user';

export default function SignInBtn() {
  const [user, setUser] = useContext(UserContext).user;

  const onSignInBtnClick = async () => {
    //this is the user we get once they are signed in
    let userBySignIn = await signIn();
    if (userBySignIn) setUser(userBySignIn);
    console.log(userBySignIn);
  };

  return (
    <div className='container'>
      <div className='signInBtn' onClick={onSignInBtnClick}>
        <p>Sign in With Google</p>
      </div>
    </div>
  );
}
