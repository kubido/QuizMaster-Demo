import React from "react"
import { connect } from "react-redux"

import * as actions from "../actions/questionsActions"
import QuestionItem from "./QuestionItem"
import QuestionFormCreate from "./QuestionFormCreate"

@connect((store) => {
  return {
    questions: store.questions.questions,
    display_form: store.questions.display_form,
    action_type: store.questions.action_type,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    // this.props.dispatch(actions.fetchQuestions())
  }

  fetchQuestions() {
    this.props.dispatch(actions.fetchQuestions())
  }

  displayQuestionForm(form_action){
    switch (form_action) {
      case 'new': {
        this.props.dispatch(actions.displayQuestionFormNew());
        break;
      }

      case 'edit' : {
        this.props.dispatch(actions.displayQuestionFormEdit());
        break;
      }
    }
  }

  handleSubmitCreateQuestion(values){
    this.props.dispatch(actions.addQuestion(values));
  }


  render() {
    const { questions, display_form, action_type } = this.props;
    if (!questions.length) {
      return <button onClick={this.fetchQuestions.bind(this)}>load questions</button>
    }

    if(display_form){
      return (
        <QuestionFormCreate onSubmit={this.handleSubmitCreateQuestion.bind(this)}/>
      )
    }

    return (

      <div>
        <div>
          <button onClick={this.displayQuestionForm.bind(this, 'new')}>Create new Question</button>
          <ul>
            {questions.map(question => {
              return (
                <li key={question.id}>
                <QuestionItem question={question}></QuestionItem>
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    )
  }
}
