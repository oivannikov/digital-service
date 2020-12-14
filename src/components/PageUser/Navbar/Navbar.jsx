import React from 'react';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { setAuthUser } from '../../../redux/actions';

import './Navbar.scss';
export function Navbar({ onTabChange, onRegister }) {
  const dispatch = useDispatch();

  function handleClosePage() {
    onRegister(false);
    dispatch(setAuthUser(false));
  }

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

          <li className="nav__item" onClick={() => onTabChange('inputButton')}>
            Display
          </li>
          <li className="nav__item" onClick={handleClosePage}>
            Exit
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  onTabChange: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
}
