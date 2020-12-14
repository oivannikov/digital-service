import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { setUsers, setCurrentUser } from '../../../redux/actions';

import './UserEdit.scss';

export function UserEdit({ onTabChange }) {
  const user = useSelector(state => state.currentUser);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const { fullName, position, phone, signUpLogin, signUpPassword, reTypePassword, id } = user;

  const [editedFullName, setEditedFullName] = useState(fullName);
  const [editedPosition, setEditedPosition] = useState(position);
  const [editedPhone, setEditedPhone] = useState(phone);
  const [editedSignUpLogin, setEditedSignUpLogin] = useState(signUpLogin);
  const [editedSignUpPassword, setEditedSignUpPassword] = useState(signUpPassword);
  const [editedReTypePassword, setEditedReTypePassword] = useState(reTypePassword);
  const [showPassword, setShowPassword] = useState(false);
  
  function handleUpdateSubmit(e) {
    e.preventDefault();

    if (editedSignUpPassword !== editedReTypePassword) {
      return ;
    }

    const index = users.findIndex(({ id }) => id === user.id);

    const updatedUser = {
      fullName: editedFullName,
      position: editedPosition,
      phone: editedPhone,
      signUpLogin: editedSignUpLogin,
      signUpPassword: editedSignUpPassword,
      reTypePassword: editedReTypePassword,
      id,
    }

    const updatedUsers = [
      ...users.slice(0, index),
      updatedUser,
      ...users.slice(index + 1, users.length)
    ];

    dispatch(setCurrentUser(updatedUser));
    dispatch(setUsers(updatedUsers));
    onTabChange('userList');
  }

  return (
    <form className="form" onSubmit={(e) => handleUpdateSubmit(e)}>
      <input
        className="validate form__input"
        type="text"
        value={editedFullName}
        onChange={({ target }) => setEditedFullName(target.value)}
      />

      <input
        className="validate form__input"
        type="text"
        value={editedPosition}
        onChange={({ target }) => setEditedPosition(target.value)}
      />

      <input
        className="validate form__input"
        type="text"
        value={editedPhone}
        onChange={({ target }) => setEditedPhone(target.value)}
      />

      <input
        className="validate form__input"
        type="text"
        value={editedSignUpLogin}
        onChange={({ target }) => setEditedSignUpLogin(target.value)}
      />

      <input
        className="validate form__input"
        type={showPassword ? 'text' : 'password'}
        value={editedSignUpPassword}
        onChange={({ target }) => setEditedSignUpPassword(target.value)}
      />

      <input
        className="validate form__input"
        type={showPassword ? 'text' : 'password'}
        value={editedReTypePassword}
        onChange={({ target }) => setEditedReTypePassword(target.value)}
      />

      <p>
        <label>
          <input type="checkbox" onClick={() => setShowPassword(!showPassword)}/>
          <span>show password</span>
        </label>
      </p>

      <button className="btn form__update" type="submit">Update</button>
    </form>
  );
}

UserEdit.propTypes = {
  onTabChange: PropTypes.func.isRequired,
}
