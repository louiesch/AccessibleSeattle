import { React, useState } from 'react';
import { signIn } from '../../services/auth';
import './style.css';

function SignInBtn() {
  const [user, setUser] = useState();

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
  )
}

export default SignInBtn;
