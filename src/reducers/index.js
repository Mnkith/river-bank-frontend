import { combineReducers } from 'redux'
import authReducer from './auth'
import accountsReducer from './accounts'

export default combineReducers({
  auth: authReducer,
  account: accountsReducer
})