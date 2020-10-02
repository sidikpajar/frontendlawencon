import { combineReducers } from 'redux'
import contactReducer from './contact/contactReducer'
import contactDetailReducer from './contactDetail/contactDetailReducer'
import contactAddReducer from './contactAdd/contactAddReducer'
import contactUpdateReducer from './contactUpdate/contactUpdateReducer'

const rootReducer = combineReducers({
  contact: contactReducer,
  contactDetail:contactDetailReducer,
  contactAdd:contactAddReducer,
  contactUpdate:contactUpdateReducer,
})

export default rootReducer