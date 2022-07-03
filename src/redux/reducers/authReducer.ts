import { UserActions, UserTypes } from "../types"
import { UserState } from "../types"

const initialState: UserState = {
  isAuthenticated: false,
  errors: null,
  user: null
}

export const authReducer = (state = initialState, action: UserActions): UserState => {
  const { type, payload } = action
  switch (type) {
    case UserTypes.USER_LOGIN:
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated,
        errors: payload.errors,
        user: payload.user
      }
    case UserTypes.USER_REGISTER:
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated
      }
    default: return state
  }
}