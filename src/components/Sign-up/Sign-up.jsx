import React, { useState } from 'react';

import './Sign-up.scss';

export function SignUp({ setNewUser }) {
  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [reTypePassword, setReTypePassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  
    const newUser = {
      fullName,
      position,
      phone,
      login,
      password,
      reTypePassword,
    }


    // call function witch take a user
    setNewUser(newUser);

    // clear all input-field
    setFullName('');
    setPosition('');
    setPhone('');
    setLogin('');
    setPassword('');
    setReTypePassword('');

    // Return to "Sign In"
  }

  return (
		<form className="register-form flex" onSubmit={(e) => handleSubmit(e)}>        
      <div className="input-field">
        <input
          className="validate"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="input-field">
        <input
          className="validate"
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
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
          required
        />
      </div>


      <div className="input-field">
        <input
          className="validate"
          type="email"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
      </div>

      <div className="input-field">
        <input
          className="validate"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          required
        />
      </div>

      <div className="button__regist">
        <button className="btn waves-effect button__regist-link">Sign Up</button>
      </div>
		</form>
  )
}
