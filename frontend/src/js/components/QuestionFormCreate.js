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


  hideForm(){
    this.props.dispatch(actions.hideForm())
  }

  render(){
    const { handleSubmit } = this.props;

    return(
      <div>
        <button class="btn btn-link" onClick={this.hideForm.bind(this)}> &lt; Back</button>
        <h1>Create new Question</h1>
        <div class="well bs-component">

          <form onSubmit={handleSubmit} class="form-horizontal">
            <fieldset>
              
              <div class="form-group">
                <label for="content" class="col-lg-2 control-label">Question : </label>
                <div class="col-lg-10">
                  <Field name="content" component="input" type="text" class="form-control"/>
                </div>
              </div>

              <div class="form-group">
                <label for="content" class="col-lg-2 control-label">Answer : </label>
                <div class="col-lg-10">
                  <Field name="answer" component="input" type="text" class="form-control"/>
                </div>
              </div>

              <button type="submit" class="btn btn-success">Add</button>
            </fieldset>

          </form>
        </div>
      </div>
    )
  }
}

QuestionFormCreate = reduxForm({
  form: 'createQuestions'
})(QuestionFormCreate);

export default QuestionFormCreate;
