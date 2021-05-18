import { auth, provider } from '../firebase';

export const signIn = async () => {
  let user;
  await auth //await to wait until below is done before returning the user
  .signInWithPopup(provider)
  .then((result) => {
    console.log(result.user);
    user = result.user;
  })
  .catch((error) => {
    console.log(error.message);
  });
  return user;
};

export const logout = () => {
  let logout_success;
  await auth.signOut()
  .then(() => {
    logout_success = true;
  })
  .catch((error) => {
    console.log(error.message);
  });
  return logout_success;
}