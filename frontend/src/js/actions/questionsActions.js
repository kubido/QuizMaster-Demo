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

export function displayQuestionFormEdit(question_id){
  return function(dispatch) {
    dispatch({
      type: 'FORM_EDIT_QUESTION',
      payload: {question_id: question_id}
    })
  }
}
export function addQuestion(values) {
  return function(dispatch) {
    axios.post("/api/questions", values)
      .then((response) => {
        dispatch({type: "ADD_QUESTION_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "ADD_QUESTION_REJECTED", payload: err})
      })
  }
}

export function hideForm() {
  return function(dispatch) {
    dispatch({
      type: 'HIDE_FORM',
      payload: {}
    })
  }
}

export function updateQuestion(id, text) {
  return {
    type: 'UPDATE_QUESTION',
    payload: {},
  }
}

export function deleteQuestion(id) {
  return function(dispatch) {
    axios.delete(`/api/questions/${id}`)
      .then((response) => {
        dispatch({type: "DELETE_QUESTION_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "DELETE_QUESTION_REJECTED", payload: err})
      })
  }
}
