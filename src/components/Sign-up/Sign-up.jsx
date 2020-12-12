import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { UserList } from '../PageUser/UserList/UserList';

import './Sign-up.scss';

export function SignUp({ setNewUser, setRegister, isRegiste }) {
  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [signUpLogin, setSignUpLogin] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [reTypePassword, setReTypePassword] = useState('');

  const [errors, setErrors] = useState({});

  const users = useSelector(state => state.users);

  function handleSignUpSubmit(e) {
    e.preventDefault();

    if (errors.errorReTypePassword) {
      return ;
    }

    // create user
    const newUser = {
      fullName,
      position,
      phone,
      signUpLogin,
      signUpPassword,
      reTypePassword,
      id: users.length + 1,
    }

    // add user into array users
    setNewUser(newUser);

    // clear all input-field
    setFullName('');
    setPosition('');
    setPhone('');
    setSignUpLogin('');
    setSignUpPassword('');
    setReTypePassword('');
  }

  function handleReTypePassword() {
    if (errors.errorReTypePassword) {
      setErrors({});
    }

    if (signUpPassword !== reTypePassword) {
      setErrors({errorReTypePassword: 'Passwords do not match'});
    }
  }

  return (
		<form className="register-form flex" onSubmit={(e) => handleSignUpSubmit(e)}> 
      <div className="input-field">
        <input
          className="validate"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
        />
      </div>

      <div className="input-field">
        <input
          className="validate"
          type="text"
          placeholder="Position"
          value={position}
          onChange={({ target }) => setPosition(target.value)}
        />
      </div>

      <div className="input-field">
        <input
          className="validate"
          type="tel"
          name="tel"
          placeholder="Number of phone"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
      </div>

      <div className="input-field">
        <input
          className="validate"
          type="email"
          placeholder="Login"
          value={signUpLogin}
          onChange={({ target }) => setSignUpLogin(target.value)}
          required
        />
      </div>

      <div className="input-field">
        <input
          className="validate"
          type="password"
          placeholder="Password"
          value={signUpPassword}
          onChange={({ target }) => setSignUpPassword(target.value)}
          required
        />
      </div>

      <div className="input-field">
        <input
          className="validate"
          type="password"
          placeholder="Re-type password"
          value={reTypePassword}
          onChange={({ target }) => setReTypePassword(target.value)}
          onBlur={() => handleReTypePassword()}
          required
        />

        { errors?.errorReTypePassword && <div className="errors">{ errors.errorReTypePassword }</div> }
      </div>

      <div className="button__regist">
        <a className="btn waves-effect button__regist-link" onClick={() => setRegister(false)}>Back</a>
        <button className="btn waves-effect button__regist-link">Sign Up</button>
      </div>
		</form>
  );
}
