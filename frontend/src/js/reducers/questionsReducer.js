export default function reducer(state={
    questions: [],
    question: {},
    fetching: false,
    fetched: false,
    error: null,
    display_form: false,
    display_quiz: false,
    answer: {},
    action_type: 'init'
  }, action) {

    switch (action.type) {

      case "FETCH_QUESTIONS": {
        return {...state, fetching: true}
      }

      case "FETCH_QUESTIONS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }

      case "FETCH_QUESTIONS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          questions: action.payload,
        }
      }

      case "ADD_QUESTION_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          display_form: false,
          questions: state.questions.concat(action.payload.data)
        }
      }


      case "ADD_QUESTION_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }

      case "FORM_NEW_QUESTION": {
        return {
          ...state,
          display_form: true,
          action_type: 'new'
        }
      }

      case "FORM_EDIT_QUESTION": {
        var question = state.questions.find((x) => x.id === action.payload.question_id)
        return {
          ...state,
          display_form: true,
          action_type: 'edit',
          question: question,
        }
      }

      case "UPDATE_QUESTION_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          display_form: false,
          questions: state.questions.map(question => question.id === action.payload.data.id ?
            action.payload.data : 
            question
        ) 
        }
      }

      case "UPDATE_QUESTION_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }

      case "DELETE_QUESTION_FULFILLED": {
      
        var index = state.questions.findIndex((x) => x.id === action.payload.data.id); 
        
        return {
          ...state,
          fetching: false,
          fetched: true,
          display_form: false,
          questions: [
            ...state.questions.slice(0,index),
            ...state.questions.slice(index+1)
          ]
        }
      }

      case "HIDE_FORM": {
        return {...state, display_form: false, display_quiz: false}
      }

      case "DISPLAY_QUIZ" : {
        var question = state.questions.find((x) => x.id === action.payload.question_id)
        return {
          ...state,
          display_form: false,
          display_quiz: true,
          question: question,
        }
      }

      case "SUBMIT_QUIZ_FULFILLED" : {
        return {
          ...state,
          answer: action.payload.answer
        }        
      }

    }      

    return state
}
