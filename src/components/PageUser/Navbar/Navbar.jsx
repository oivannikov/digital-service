import React from 'react';

import './Navbar.scss';

export function Navbar({ onTabChange }) {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="nav__item" onClick={() => onTabChange('userEdit')}>
            Edit
          </li>

          <li className="nav__item" onClick={() => onTabChange('userList')}>
            List
          </li>

          <li className="nav__item" onClick={() => onTabChange('userButton')}>
            Display
          </li>
        </ul>
      </div>
    </nav>
  );
}
