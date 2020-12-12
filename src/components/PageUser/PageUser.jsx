import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setAuthUser } from '../../redux/actions';

export function PageUser() {
  const user = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(setAuthUser(false))}></button>
      <h1>{user.fullName}</h1>
    </>
  );
}
