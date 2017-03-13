import React from "react"
import * as actions from "../actions/questionsActions"
import { connect } from "react-redux"
import { Field, reduxForm } from 'redux-form'

@connect((store) => {
  return {
    question: store.questions.question,
    display_form: store.questions.display_form,
    display_quiz: store.questions.display_quiz,
    answers: store.questions.answers
  };
})

export default class Quiz extends React.Component{
  hideForm(){
    this.props.dispatch(actions.hideForm())
  }

  render(){
    const { handleSubmit, question, answers } = this.props;
    return(
      <div>
        <button class="btn btn-link" onClick={this.hideForm.bind(this)}> &lt; Back</button>              

        <h1>{question.content}</h1>
        <div class="well bs-component">

          <form onSubmit={handleSubmit} class="form-horizontal">
            <fieldset>
              <div class="form-group">
                <label for="content" class="col-lg-2 control-label">Answer : </label>
                <div class="col-lg-10">
                  <Field name="answer" component="input" type="text" class="form-control"/>
                  <Field name="id" component="input"  type="hidden" />
                </div>
              </div>

              <button type="submit" class="btn btn-success">Submit</button>
            </fieldset>

          </form>          
        </div>

        {answers.map(function(answer, idx) {
            return (
              <div>
                Correct: {answer.correct ? 
                  <span class="label label-success">YES</span> : 
                  <span class="label label-danger">NO</span>} 
              </div>  
            )
          })}
      </div>
    )
  }
}


Quiz = reduxForm({
  form: 'formQuiz'
})(Quiz);

Quiz = connect(
  state => ({
    initialValues: {id: state.questions.question.id, answer: ""}
  }),           // bind account loading action creator
)(Quiz)