import React from 'react';

import { useSelector } from 'react-redux';

import './UserList.scss';

export function UserList() {
  const users = useSelector(state => state.users);

  return (
    <ul className="users">
    { users.map(({ fullName, id }) => (
      <li className="user" key={id}>
        {fullName}
      </li>
    ))}
  </ul>
  );
}
