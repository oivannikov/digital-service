import React from 'react';

import './Sign-in.scss';

export function SignIn({ setRegister }) {
  return (
    <form className="register-from">
      <div className="row margin">
        <div className="input-field col s12">
          <input className="validate" type="email" placeholder="Login" required/>
        </div>
      </div>

      <div className="row margin">
        <div className="input-field col s12">
          <input className="validate" type="password" placeholder="Password" required/>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button className="btn waves-effect waves-light col s12" type="sumbit">Sign in</button>
        </div>

        <div className="input-field col s12">
          <p className="margin center medium-small sign-up">Don't have an account?
            <a onClick={() => setRegister(true)} href="#"> Register now</a>
          </p>
        </div>
      </div>
    </form>
  )
}
