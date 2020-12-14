import React from 'react';

import classNames from 'classnames';

import { useSelector } from 'react-redux';

import './UserList.scss';

export function UserList() {
  const users = useSelector(state => state.users);
  const user = useSelector(state => state.currentUser);

  return (
    <ul className="userList">
    { users.map(({ fullName, id }) => (
      <li className={classNames('userList__user', {'userList__user--active': user.id === id})} key={id}>
        { fullName }
      </li>
    ))}
  </ul>
  );
}
