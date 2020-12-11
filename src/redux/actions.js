import { SET_USERS } from "./types";

export function setUsers(users) {
  console.log(users);
  return {
    type: SET_USERS,
    payload: users,
  }
}
