import { SET_AUTH_USER, SET_USER, SET_USERS } from "./types"

const initialState = {
  users: [],
  currentUser: {},
  authUser: false,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      }

    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      }

    case SET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      }
    default: return state;
  }
}
