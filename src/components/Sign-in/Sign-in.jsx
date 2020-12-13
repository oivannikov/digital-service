import React, { useState } from 'react';

import classNames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';

import { setAuthUser, setCurrentUser } from '../../redux/actions';

import './Sign-in.scss';

export function SignIn({ setRegister }) {
  const [signInLogin, setSignInLogin] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [errorSignIn, setErrorSignIn] = useState(false);
  const [errors, setErrors] = useState({});

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  function handleSignInSubmit(e) {
    e.preventDefault();

    const user = users.find(user => signInLogin === user.signUpLogin && signInPassword === user.signUpPassword);

    if (!user) {
      setErrors({errorSignIn: 'Wrong password or login'});
      setErrorSignIn(true);

      return ;
    }

    setErrors({});
    dispatch(setCurrentUser(user));
    dispatch(setAuthUser(true));
    setErrorSignIn(false);
  }

  function handleSignInLogin(target) {
    setSignInLogin(target.value);
    setErrors({});
  }

  function handleSignInPassword(target) {
    setSignInPassword(target.value);
    setErrors({});
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
            onChange={({ target }) => handleSignInLogin(target)}
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
            onChange={({ target }) => handleSignInPassword(target)}
            required
          />

          {errors.errorSignIn && <div className="errors">{errors.errorSignIn}</div>}
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button className="btn waves-effect waves-light col s12" type="sumbit">Sign in</button>
        </div>

        <div className="input-field col s12">
          <p className="margin center medium-small sign-up text">
            Don't have an account?

            <span
              className={classNames('register', {'prompt': errorSignIn})}
              onClick={() => setRegister(true)}
              // href="#"
            >
              &thinsp;Register now
            </span>
          </p>
        </div>

      </div>
    </form>
  );
}
