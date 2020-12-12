import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setAuthUser, setCurrentUser } from '../../redux/actions';

import './Sign-in.scss';

export function SignIn({ setRegister }) {
  const [signInLogin, setSignInLogin] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const users = useSelector(state => state.users);
  const authUser = useSelector(state => state.authUser);
  const dispatch = useDispatch();

  console.log(authUser);  
  function handleSignInSubmit(e) {
    e.preventDefault();
  
    const user = users.find(user => signInLogin === user.signUpLogin && signInPassword === user.signUpPassword);

    if (!user) {
      return ;
    }

    dispatch(setCurrentUser(user));
    dispatch(setAuthUser(true));
  }

  return (
    <form className="register-from" onSubmit={(e) => handleSignInSubmit(e)}>
      <div className="row margin">
        <div className="input-field col s12">
          <input
            className="validate"
            type="email"
            placeholder="Login"
            value={signInLogin}
            onChange={(e) => setSignInLogin(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="row margin">
        <div className="input-field col s12">
          <input
            className="validate"
            type="password"
            placeholder="Password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button className="btn waves-effect waves-light col s12" type="sumbit">Sign in</button>
        </div>

        <div className="input-field col s12">
          <p className="margin center medium-small sign-up">
            Don't have an account?
            <a onClick={() => setRegister(true)} href="#"> Register now</a>
          </p>
        </div>
      </div>
    </form>
  );
}
