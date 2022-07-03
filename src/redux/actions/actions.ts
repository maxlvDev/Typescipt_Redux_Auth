import * as AuthActionCreators from './authActions'
import * as ContactActionCreators from './contactActions'

export default {
    ...AuthActionCreators,
    ...ContactActionCreators
}