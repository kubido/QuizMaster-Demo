import { combineReducers } from "redux"

import questions from "./questionsReducer"
import { reducer as formReducer } from 'redux-form'



export default combineReducers({
  questions,
  form: formReducer
})
