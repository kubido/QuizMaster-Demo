import React from "react"
import { connect } from "react-redux"

import { fetchQuestions } from "../actions/questionsActions"

@connect((store) => {
  return {
    questions: store.questions.questions,
    // userFetched: store.user.fetched,
    // tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    // this.props.dispatch(fetchQuestions())
  }

  fetchQuestions() {
    this.props.dispatch(fetchQuestions())
  }
  render() {
    const { questions } = this.props;

    if (!questions.length) {
      return <button onClick={this.fetchQuestions.bind(this)}>load questions</button>
    }

    const mappedQuestions = questions.map(question => <li>{question.content}</li>)
    return <div>
      <h1>List Question</h1>
      <ul>{mappedQuestions}</ul>
    </div>
  }
}
