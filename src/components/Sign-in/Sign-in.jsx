import React, { useState } from 'react';

import classNames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';

import { setAuthUser, setCurrentUser } from '../../redux/actions';

import './Sign-in.scss';

export function SignIn({ setRegister }) {
  const [signInLogin, setSignInLogin] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [errorSignIn, setErrorSignIn] = useState(false);

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  function handleSignInSubmit() {
    e.preventDefault();

    const user = users.find(user => signInLogin === user.signUpLogin && signInPassword === user.signUpPassword);

    if (!user) {
      setErrorSignIn(true);

      return ;
    }

    dispatch(setCurrentUser(user));
    dispatch(setAuthUser(true));
    setErrorSignIn(false);
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
            onChange={({ target }) => setSignInLogin(target.value)}
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
            onChange={({ target }) => setSignInPassword(target.value)}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button className="btn waves-effect waves-light col s12" type="sumbit">Sign in</button>
        </div>

        <div className="input-field col s12">
          <p className="margin center medium-small sign-up text">
            Don't have an account?

            <a
              className={classNames('register', {'prompt': errorSignIn})}
              onClick={() => setRegister(true)}
              href="#"
            >
              &thinsp;Register now
            </a>

            <span className={classNames(!errorSignIn ? 'hide' : 'show')}> or try again</span>
          </p>
        </div>
      </div>
    </form>
  );
}
