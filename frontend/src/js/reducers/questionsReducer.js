export default function reducer(state={
    questions: [],
    question: {},
    fetching: false,
    fetched: false,
    error: null,
    display_form: false,
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
        return {
          ...state,
          display_form: true,
          action_type: 'edit'
        }
      }

      case "UPDATE_QUESTION": {
        const { id, text } = action.payload
        const newQuestions = [...state.questions]
        const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
        newTweets[tweetToUpdate] = action.payload;

        return {
          ...state,
          tweets: newTweets,
        }
      }
      case "DELETE_QUESTION": {
        return {
          ...state,
          tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
        }
      }
    }

    return state
}
