import React, { useState } from 'react';

import { InputButton } from './InputButton/InputButton';
import { UserList } from './UserList/UserList';
import { UserEdit } from './UserEdit/UserEdit';
import { Navbar } from './Navbar/Navbar';

import './PageUser.scss';

export function PageUser() {
  const [tab, setTab] = useState('userList');

  return (
    <div className="page">
      <Navbar onTabChange={setTab} />

      { tab === 'userList' && <UserList /> }
      { tab === 'userEdit' && <UserEdit onTabChange={setTab} /> }
      { tab === 'userButton' && <InputButton /> }

      {/* <button className="btn pages__button" onClick={() => dispatch(setAuthUser(false))}>Return</button> */}
    </div>
  );
}
