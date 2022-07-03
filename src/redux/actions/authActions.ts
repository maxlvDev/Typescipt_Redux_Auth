import { BACK_URL } from "../../utils/url"
import { UserActions, IUser, UserTypes } from "../types"
import { userCheck } from "../../utils/userCheck"
import { Dispatch } from "react"

const AUTH_URL = BACK_URL + 'auth'

export function login(user: IUser, history: Function) {
  return (dispatch: Dispatch<UserActions>) => {
    fetch(AUTH_URL)
      .then(res => res.json())
      .then(res => {
        const checkedUser = userCheck(res, user)
        if (checkedUser.access) {
          history('/main')
          dispatch({
            type: UserTypes.USER_LOGIN,
            payload: {
              isAuthenticated: true,
              errors: null,
              user: checkedUser.user
            }
          })
        } else {
          dispatch({
            type: UserTypes.USER_LOGIN,
            payload: {
              isAuthenticated: false,
              errors: checkedUser.message,
              user: null
            }
          })
        }
      })
      .catch(err => console.log('login: ', err))
  }
}

export function register(user: IUser) {
  return (dispatch: Dispatch<UserActions>) => {
    fetch(AUTH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: UserTypes.USER_REGISTER,
          payload: {
            isAuthenticated: true,
          }
        })
      })
      .catch(err => console.log('register: ', err))
  }
}




