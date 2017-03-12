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

export function addQuestion(id, text) {
  return {
    type: 'ADD_QUESTION',
    payload: {
      id,
      text,
    },
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
