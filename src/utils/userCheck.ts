import { IUser } from "../redux/types"

export const userCheck = (users: Array<any>, data: IUser) => {
  const username = data.username
  const password = data.password
  const foundUser = users.filter(item => Object.keys(item).some(k => item[k].toString() === username))[0]
  if (!foundUser) {
    return {
      access: false,
      status: 401,
      message: 'User does not exist'
    }
  }
  if (foundUser.password !== password) {
    return {
      access: false,
      status: 401,
      message: 'incorrect password - access denied'
    }
  }
  return {
    access: true,
    status: 200,
    user: foundUser
  }
}