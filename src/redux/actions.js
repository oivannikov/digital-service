import { SET_AUTH_USER, SET_USER, SET_USERS } from "./types";

export function setUsers(users) {
  console.log(users);
  return {
    type: SET_USERS,
    payload: users,
  }
}

export function setCurrentUser(user) {
  return {
    type: SET_USER,
    payload: user,
  }
}

export function setAuthUser(isAuthUser) {
  return {
    type: SET_AUTH_USER,
    payload: isAuthUser,
  }
}
