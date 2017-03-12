export default function reducer(state={
    questions: [],
    fetching: false,
    fetched: false,
    error: null,
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
      case "ADD_QUESTION": {
        return {
          ...state,
          questions: [...state.questions, action.payload],
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
