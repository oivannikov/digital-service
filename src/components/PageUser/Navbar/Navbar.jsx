import React from 'react';

import './Navbar.scss';

export function Navbar({ onTabChange }) {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li onClick={() => onTabChange('userList')}>
            <a className="nav__item" href="#">List</a>
          </li>

          <li onClick={() => onTabChange('userEdit')}>
            <a className="nav__item" href="#">Edit</a>
          </li>

          <li onClick={() => onTabChange('userButton')}>
            <a className="nav__item" href="#">Display</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
