import React from 'react';

export function Navbar({ setModalActive, handleModal }) {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a className="nav__sign-in" onClick={() => setModalActive(true)} href="#">Sign in</a>
          </li>
          <li>
            <a className="nav__registration" onClick={() => handleModal(true)} href="#">Registration</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
