import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { InputButton } from './InputButton/InputButton';
import { UserList } from './UserList/UserList';
import { UserEdit } from './UserEdit/UserEdit';
import { Navbar } from './Navbar/Navbar';

import './PageUser.scss';

export function PageUser({ setRegister }) {
  const [tab, setTab] = useState('userList');

  return (
    <div className="page">
      <Navbar onTabChange={setTab} onRegister={setRegister} />

      <div className="page__wrapper">
        { tab === 'userEdit' && <UserEdit onTabChange={setTab} /> }
        { tab === 'userList' && <UserList /> }
        { tab === 'inputButton' && <InputButton /> }
      </div>
    </div>
  );
}

PageUser.propTypes = {
  setRegister: PropTypes.func.isRequired,
}
