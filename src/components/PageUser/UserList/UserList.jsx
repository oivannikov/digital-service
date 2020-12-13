import React from 'react';

import classNames from 'classnames';

import { useSelector } from 'react-redux';

import './UserList.scss';

export function UserList() {
  const users = useSelector(state => state.users);
  const user = useSelector(state => state.currentUser);

  return (
    <ul className="users">
    { users.map(({ fullName, id }) => (
      <li className={classNames('user', {'active-user': user.id === id})} key={id}>
        { fullName }
      </li>
    ))}
  </ul>
  );
}
