import React from "react"
import { connect } from "react-redux"

import * as actions from "../actions/questionsActions"
import QuestionList from "./QuestionList"
import QuestionFormCreate from "./QuestionFormCreate"
import QuestionFormEdit from "./QuestionFormEdit"
import Quiz from "./Quiz"

@connect((store) => {
  return {
    questions: store.questions.questions,
    question: store.questions.question,
    display_form: store.questions.display_form,
    action_type: store.questions.action_type,
    display_quiz: store.questions.display_quiz,
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

  handleSubmitQuiz(values){
    this.props.dispatch(actions.submitAnswers(values));
  }


  render() {
    const { questions, display_form, action_type, display_quiz} = this.props;

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

    if(display_quiz){
      return (
        <Quiz onSubmit={this.handleSubmitQuiz.bind(this)} />
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
