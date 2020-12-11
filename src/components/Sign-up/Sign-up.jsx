import React, { useState } from 'react';

import './Sign-up.scss';

export function SignUp({ setNewUser }) {
  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [signUpLogin, setSignUpLogin] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [reTypePassword, setReTypePassword] = useState('');
  const [errors, setErrors] = useState({});

  function handleSignUpSubmit(e) {
    e.preventDefault();
  
    if (errors.reTypePassword) {
      return ;
    }

    const newUser = {
      fullName,
      position,
      phone,
      signUpLogin,
      signUpPassword,
      reTypePassword,
    }

    // call function witch take a user
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
    if (errors.reTypePassword) {
      setErrors({});
    }
  
    if (signUpPassword !== reTypePassword) {
      setErrors({reTypePassword: 'Passwords do not match'});
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
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="input-field">
        <input
          className="validate"
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>

      <div className="input-field">
        <input
          className="validate"
          type="tel"
          name="tel"
          placeholder="Number of phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>


      <div className="input-field">
        <input
          className="validate"
          type="email"
          placeholder="Login"
          value={signUpLogin}
          onChange={(e) => setSignUpLogin(e.target.value)}
          required
        />
      </div>

      <div className="input-field">
        <input
          className="validate"
          type="password"
          placeholder="Password"
          value={signUpPassword}
          onChange={(e) => setSignUpPassword(e.target.value)}
          required
        />
      </div>

      <div className="input-field">
        <input
          className="validate"
          type="password"
          placeholder="Re-type password"
          value={reTypePassword}
          onChange={(e) => setReTypePassword(e.target.value)}
          onBlur={() => handleReTypePassword()}
          required
        />

        { errors?.reTypePassword && <div className="errors">{ errors.reTypePassword }</div> }
      </div>

      <div className="button__regist">
        <button className="btn waves-effect button__regist-link">Sign Up</button>
      </div>
		</form>
  )
}
