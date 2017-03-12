import axios from "axios";

export function fetchQuestions() {
  return function(dispatch) {
    axios.get("/api/questions")
      .then((response) => {
        dispatch({type: "FETCH_QUESTIONS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_QUESTIONS_REJECTED", payload: err})
      })
  }
}

export function displayQuestionFormNew(){
  return function(dispatch) {
    dispatch({
      type: 'FORM_NEW_QUESTION',
      payload: {action_type: 'new', display_form: true}
    })
  }
}

export function displayQuestionFormEdit(){
  return function(dispatch) {
    dispatch({
      type: 'FORM_EDIT_QUESTION',
      payload: {}
    })
  }
}
export function addQuestion(values) {
  return function(dispatch) {
    axios.post("/api/questions")
      .then((response) => {
        dispatch({type: "ADD_QUESTION_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "ADD_QUESTION_REJECTED", payload: err})
      })
  }
}

export function updateQuestion(id, text) {
  return {
    type: 'UPDATE_QUESTION',
    payload: {
      id,
      text,
    },
  }
}

export function deleteQuestion(id) {
  return { type: 'DELETE_QUESTION', payload: id}
}
