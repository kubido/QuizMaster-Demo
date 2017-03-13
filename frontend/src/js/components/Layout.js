import React from "react"
import { connect } from "react-redux"

import * as actions from "../actions/questionsActions"
import QuestionList from "./QuestionList"
import QuestionFormCreate from "./QuestionFormCreate"
import QuestionFormEdit from "./QuestionFormEdit"

@connect((store) => {
  return {
    questions: store.questions.questions,
    question: store.questions.question,
    display_form: store.questions.display_form,
    action_type: store.questions.action_type,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(actions.fetchQuestions())
  }

  fetchQuestions() {
    this.props.dispatch(actions.fetchQuestions())
  }

  displayQuestionFormNew(form_action){
    this.props.dispatch(actions.displayQuestionFormNew());
  }

  handleSubmitCreateQuestion(values){
    this.props.dispatch(actions.addQuestion(values));
  }

  handleSubmitEditQuestion(values){
    this.props.dispatch(actions.updateQuestion(values));
  }


  render() {
    const { questions, display_form, action_type } = this.props;

    if(display_form && action_type == 'new'){
      return (
        <QuestionFormCreate onSubmit={this.handleSubmitCreateQuestion.bind(this)} />
      )
    }

    if(display_form && action_type == 'edit'){
      return (
        <QuestionFormEdit onSubmit={this.handleSubmitEditQuestion.bind(this)} />
      )
    }

    return (

      <div>
        <div>
          <button onClick={this.displayQuestionFormNew.bind(this)} class="btn btn-primary">Create new Question</button>
          <QuestionList questions={questions}/>
        </div>

      </div>
    )
  }
}
