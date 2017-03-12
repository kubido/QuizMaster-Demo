import React from "react"
import { connect } from "react-redux"
import { Field, reduxForm } from 'redux-form';

import * as actions from "../actions/questionsActions"

@connect((store) => {
  return {
    questions: store.questions.questions,
    display_form: store.questions.display_form,
    action_type: store.questions.action_type,
  };
})

class QuestionFormCreate extends React.Component{

  render(){
    const { handleSubmit } = this.props;

    return(
      <div>
        <form onSubmit={handleSubmit}>
          <label>Question</label>
          <Field name="content" component="input" type="text"/>


          <button type="submit">Add</button>

        </form>
      </div>
    )
  }
}

QuestionFormCreate = reduxForm({
  form: 'createQuestions'
})(QuestionFormCreate);

export default QuestionFormCreate;
