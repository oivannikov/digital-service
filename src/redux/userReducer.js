import { SET_USERS } from "./types"

const initialState = {
  users: [],
  currentUser: {},
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      }
    default: return state;
  }
}
