import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setUsers, setCurrentUser } from '../../../redux/actions';

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
      ...users.slice(index + 1, users.length - 1)
    ];

    dispatch(setCurrentUser(updatedUser));
    dispatch(setUsers(updatedUsers));
    onTabChange('userList');
  }

  return (
    <form className="form" onSubmit={(e) => handleUpdateSubmit(e)}>
      <input className="validate" type="text" value={editedFullName} onChange={({ target }) => setEditedFullName(target.value)} />
      <input className="validate" type="text" value={editedPosition} onChange={({ target }) => setEditedPosition(target.value)} />
      <input className="validate" type="text" value={editedPhone} onChange={({ target }) => setEditedPhone(target.value)} />
      <input className="validate" type="text" value={editedSignUpLogin} onChange={({ target }) => setEditedSignUpLogin(target.value)} />
      <input className="validate" type="text" value={editedSignUpPassword} onChange={({ target }) => setEditedSignUpPassword(target.value)} />
      <input className="validate" type="text" value={editedReTypePassword} onChange={({ target }) => setEditedReTypePassword(target.value)} />
      <button className="btn" type="submit">Update</button>
    </form>
  );
}
